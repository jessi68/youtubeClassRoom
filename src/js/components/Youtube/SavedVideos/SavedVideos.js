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
        this.addNewVideo(newVideo);
    }

    showOnlySeenVideos = () => {
         console.log(this.savedVideoView);
         this.render(this.savedVideoView.filter((video) => video.isSeenByUser()));
    }

    showOnlyUnseenVideos = () => {
        console.log(this.savedVideoView);
        this.render(this.savedVideoView.filter((video) => !video.isSeenByUser()));
    }

    addNewVideo(newVideo) {
        if(this.state["savedNumber"] === 0) {
            this.$element.innerHTML = "";
        }
        
        this.$element.insertAdjacentHTML('beforeend', newVideo.makeNewView());
        newVideo.connectViewToFunction();
        console.log(this.$element);
        this.state["savedNumber"] += 1;
    }

    hideItself() {
        this.savedVideoView.forEach((videoView) => {
            videoView.hideItself();
        })
    }

    render(videoViews = []) {
        console.log(videoViews);
        this.hideItself();
        if(videoViews.length === 0) {
            this.$element.innerHTML = "<h1>영상이 없습니다.</h1>";
            return;
        }

        videoViews.forEach((video) => {
            console.log(video);
            video.showItself();
        });
   
    }

}