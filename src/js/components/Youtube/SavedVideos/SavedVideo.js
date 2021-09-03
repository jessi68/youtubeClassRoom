import { $, addEventFunction, foundByClassName, removeSpecificClass } from "../../../util/dom.js";
import Component from "../../base/component.js";
import { youtubeFrame } from "../template/YoutubeFrameView.js";


export default class SavedVideo {

    constructor(video, index) {
        this.video = video;
        this.metaDataId = "metaData" + index;
        this.index = index;
        this._isSeenByUser = false;
        this.deleted = false;
        this.$isOkay = new Component({});

    }

    isSeenByUser = () => {
        return this._isSeenByUser;
    }

    metaDataView(id) {
        return  `<label id=${id}>
        <span class="opacity-hover checked" id=${id}>✅</span>
        <span class="opacity-hover like" id=${id}>👍</span>
        <span class="opacity-hover comment">💬</span>
        <span class="opacity-hover trash">🗑️</span>
      </label>`
    }

    seenByUser = (event) => {
        this._isSeenByUser = true;
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
        console.log(metaDataParentView);
        let checked = foundByClassName(metaDataParentView, ".checked");
        addEventFunction(checked, "click", this.seenByUser);
        console.log(checked);
        let deleteButton = foundByClassName(metaDataParentView, ".trash");
        addEventFunction(deleteButton, "click", this.deleteItself);
        console.log(deleteButton);
    }
}