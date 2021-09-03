import Component from "../../base/component.js";
import SavedVideo from "./SavedVideo.js";

export class SavedVideos extends Component {
    constructor(props) {
        super(props);
        
        this.savedVideoView =[];
        this.renderComponent();
    }

    observe(video) {
        let newVideo = new SavedVideo(video, this.state["savedNumber"]);
        this.savedVideoView.push(newVideo);
        this.renderNewVideo(newVideo);
    }

    showOnlySeenVideos = () => {
         console.log(this.savedVideoView);
         this.render(this.savedVideoView.filter((video) => video.isSeenByUser()));
    }

    showOnlyUnseenVideos = () => {
        this.render(this.savedVideoView.filter((video) => !video.isSeenByUser()));
    }

    renderNewVideo(newVideo) {
        if(this.state["savedNumber"] === 0) {
            this.$element.innerHTML = "";
        }
        this.$element.innerHTML += newVideo.render();
        newVideo.connectViewToFunction();
        this.state["savedNumber"] += 1;
    }

    render(videoViews = []) {

        this.$element.innerHTML = videoViews.length === 0 ?
        "<h1> 영상이 없습니다.</h1>" : 
        videoViews.map((video) => {
             return video.render();
        }).join("");
        
    }

}