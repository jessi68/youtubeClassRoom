import { $, addEventFunction, foundByClassName, removeSpecificClass } from "../../../util/dom.js";
import { youtubeFrame } from "../template/YoutubeFrameView.js";



export default class SavedVideo {

    constructor(video, index) {
        this.video = video;
        this.metaDataId = "metaData" + index;
        this.index = index;
        this.isSeenByUser = false;
        this.deleted = false;

    }

    metaDataView(id) {
        return  `<div id=${id}>
        <span class="opacity-hover checked">✅</span>
        <span class="opacity-hover like">👍</span>
        <span class="opacity-hover comment">💬</span>
        <span class="opacity-hover trash">🗑️</span>
      </div>`
    }

    seenByUser = (event) => {
        this.isSeenByUser = true;
        removeSpecificClass(event.target, "opacity-hover");
    }

    deleteItself = () => {
        $("savedVideo" + this.index).remove();
    }

    render() {
        return youtubeFrame(this.video, this.metaDataView(this.metaDataId), this.index,"savedVideo");
    }

    connectViewToFunction() {
        const metaDataParentView = $(this.metaDataId);
        let checked = foundByClassName(metaDataParentView, ".checked");
        addEventFunction(checked, "click", this.seenByUser);
        let deleteButton = foundByClassName(metaDataParentView, ".trash");
        addEventFunction(deleteButton, "click", this.deleteItself);
    }
}