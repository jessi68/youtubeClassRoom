import { youtubeFrame } from "../template/YoutubeFrameView.js";


export default class SavedVideo {

    constructor(video) {
        this.video = video;
        this.isSeenByUser = false;
        this.deleted = false;
    }

    metaDataView() {
        return  `<div>
        <span class="opacity-hover checked">✅</span>
        <span class="opacity-hover like">👍</span>
        <span class="opacity-hover comment">💬</span>
        <span class="opacity-hover trash">🗑️</span>
      </div>`
    }


    render() {
        return youtubeFrame(this.video, this.metaDataView());
    }
}