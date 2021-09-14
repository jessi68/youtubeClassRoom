import { rateVideo } from "../../../api/youtubeApi.js";
import { $, addEventFunction, foundByClassName, removeSpecificClass } from "../../../util/dom.js";
import Component from "../../base/component.js";
import { youtubeFrame } from "../template/YoutubeFrameView.js";


export default class SavedVideo {

    constructor(video, index) {
        this.video = video;
        print(video);
        this.id= "savedVideo" + index;
        this.metaDataId = "metaData" + index;
        this.index = index;
        this._isSeenByUser = false;
        this.deleted = false;
        this.isLiked = false;
    }

    isSeenByUser = () => {
        return this._isSeenByUser;
    }
    
    metaDataView(id) {
        return  `<label id=${id}>
        <span class="opacity-hover checked">✅</span>
        <span class="opacity-hover like">👍</span>
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

    hideItself = () => {
        document.getElementById(this.id).style.display = "none";
    }

    showItself = () => {
        document.getElementById(this.id).style.display = "block";
    }

    makeNewView() {
        return youtubeFrame(this.video, this.metaDataView(this.metaDataId), this.index,"savedVideo");

    }

     async rateAsLike(event) {
        await rateVideo(this.video["id"]["videoId"]);
        removeSpecificClass(event.target, "opacity-hover");
        this.isLiked = true;
    }

    connectViewToFunction = () => {
        print(this.video["id"]["videoId"]);
        print("ds");
        const metaDataParentView = $(this.metaDataId);
        print(metaDataParentView)
        let checked = foundByClassName(metaDataParentView, ".checked");
        addEventFunction(checked, "click", this.seenByUser);

        let deleteButton = foundByClassName(metaDataParentView, ".trash");
        addEventFunction(deleteButton, "click", this.deleteItself);

        let likeButton = foundByClassName(metaDataParentView, ".like");
        addEventFunction(likeButton, "click", this.rateAsLike.bind(this));
    }
}