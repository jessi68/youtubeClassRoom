import Component from "../../base/component.js";

export class SavedVideos extends Component {
    constructor(props) {
        super(props);
        this.renderComponent();
    }

    render() {
        this.$element.innerHTML = this.state["savedNumber"] === 0 ?
        "<h1>저장된 영상이 없습니다.</h1>"
        : "";
    }

}