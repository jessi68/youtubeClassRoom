import Component from "../../base/component.js";
import SavedVideo from "./SavedVideo.js";

export class SavedVideos extends Component {
    constructor(props) {
        super(props);
        this.savedVideoView =[];
        this.renderComponent();
    }

    observe(video) {
        let newVideo = new SavedVideo(video);
        this.savedVideoView.push(newVideo);
        this.renderNewVideo(newVideo);
    }

    renderNewVideo(video) {
        if(this.state["savedNumber"] === 0) {
            this.$element.innerHTML = "";
        }
        this.$element.innerHTML += video.render();
        this.state["savedNumber"] += 1;
    }

    render() {
        this.$element.innerHTML = "<h1>저장된 영상이 없습니다.</h1>";
        
    }

}