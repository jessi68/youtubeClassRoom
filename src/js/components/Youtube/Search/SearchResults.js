import { getVideos } from "../../../api/youtubeApi.js";
import { getSavedItem, saveItem } from "../../../util/Storage.js";
import Component from "../../base/component.js";

export default class SearchResults extends Component {
    
    constructor(props) {
        super(props);
        this.updateDom();
       
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

    async setVideos(keyword) {
       this.$element.innerHTML = "<h1>로딩 중입니다.</h1>";
        getVideos(keyword, this.state["nextPageToken"]).then(async (videos) => {
           let manufacturedVideos = this.manufactureVideos(videos);
           this.state["videos"] = [...this.state["videos"], ...manufacturedVideos];
           this.state["nextPageToken"] = this.state["videos"]["nextPageToken"];
           console.log(manufacturedVideos);
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

    saveVideo = (videoId, video, saveButton) => {
      saveItem(videoId, JSON.stringify(video));
      document.getElementById("saved-video-num").innerHTML = `저장된 영상 개수: ${getSavedItem()}`;
      saveButton.remove();

    }

    setEmpty = () => {
      this.state["videos"] = [];
    }

    render() {
      
      this.$element.innerHTML = 
      this.state["videos"].length > 0
      ? this.state["videos"].map(({id: {videoId}, snippet: {title, channelTitle}, year, month, date}, index) =>
      `<article class="clip" id=${index}>
      <div class="preview-container">
        <iframe
          width="100%"
          height="118"
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content-container pt-2 px-1">
        <h3>${title}</h3>
        <div>
          <a
            href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
            target="_blank"
            class="channel-name mt-1"
          >
             ${channelTitle}
          </a>
          <div class="meta">
            <p>${year}년 ${month}월 ${date}일</p>
          </div>
          <div class="d-flex justify-end">
            <button class="save-video">⬇️ 저장</button>
          </div>
        </div>
      </div>
    </article>
      `).join("")   : `<h1>검색 결과가 없습니다.</h1>
                       <img src="src/images/status/not_found.png">`;
    }

}