import { getVideos } from "../../../api/youtubeApi.js";
import { getSavedItemNumber, saveItem } from "../../../util/Storage.js";
import Component from "../../base/component.js";
import { saveButton, youtubeFrame } from "../template/YoutubeFrameView.js";

export default class SearchResults extends Component {
    
    constructor(props) {
        super(props);
        this.updateDom();
        this.observers = [];
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    manufactureVideos = (videos) => {
      let items =  videos["items"];
      items.forEach((item) => {
        let publishTime = item["snippet"]["publishTime"];
        item["year"] = publishTime.substr(0, 4);
        item["month"] = publishTime.substr(5, 2);
        item["date"] = publishTime.substr(8, 2);
      })
      return items;
    }

    async addVideosBy(keyword) {
       this.$element.innerHTML = "<h1>로딩 중입니다.</h1>";
        getVideos(keyword, this.state["nextPageToken"]).then(async (videos) => {
           let manufacturedVideos = this.manufactureVideos(videos);
           this.state["videos"] = [...this.state["videos"], ...manufacturedVideos];
           this.state["nextPageToken"] = this.state["videos"]["nextPageToken"];
           this.render();
   
           this.$element.childNodes.forEach((childNode, index) => {
             let video = this.state["videos"][index];
              childNode.addEventListener("click", function(event){
                event.preventDefault();
                if(event.target.className === "save-video") {
                  this.saveVideo(video["id"]["videoId"], video, event.target);
                }
              }.bind(this))
           });

        });        
    }

    notifyAllObservers = (video)  => {
      this.observers.forEach((observer) => {
         observer.observe(video);
      })
    }

    saveVideo = (videoId, video, saveButton) => {
      saveItem(videoId, JSON.stringify(video));
      print(video);
      document.getElementById("saved-video-num").innerHTML = `저장된 영상 개수: ${getSavedItemNumber()}`;
      this.notifyAllObservers(video);
      saveButton.remove();
    }

    setEmpty = () => {
      this.state["videos"] = [];
    }

    render() {
      
      this.$element.innerHTML = 
      this.state["videos"].length > 0
      ? this.state["videos"].map((youtube, index) =>
       youtubeFrame(youtube, saveButton(), index, 'results')
      ).join("")   : `<h1>검색 결과가 없습니다.</h1>
                       <img src="src/images/status/not_found.png">`;
    }

}