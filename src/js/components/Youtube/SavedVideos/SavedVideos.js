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
        this.savedVideoView.push(newVideo, newVideo);
        this.renderNewVideo(newVideo);
    }

    renderNewVideo(newVideo) {
        if(this.state["savedNumber"] === 0) {
            this.$element.innerHTML = "";
        }
        this.$element.innerHTML += newVideo.render();
        console.log(this.$element.innerHTML)
        newVideo.connectViewToFunction();
        this.state["savedNumber"] += 1;
    }

    render() {
        this.$element.innerHTML = "<h1>저장된 영상이 없습니다.</h1>";
        
    }

}