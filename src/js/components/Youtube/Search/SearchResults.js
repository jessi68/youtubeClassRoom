import { getVideos } from "../../../api/youtubeApi.js";
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
        getVideos(keyword).then(async (videos) => {
           let manufacturedVideos = this.manufactureVideos(videos);
           this.state["videos"] = manufacturedVideos;
           console.log(this.state["videos"]);
           this.render();
        });
        
    }

    render() {
      console.log(this.state);
      console.log(this.state["videos"]);

      this.$element.innerHTML = 
      this.state["videos"].length > 0
      ? this.state["videos"].map(({id: {videoId}, snippet: {title, channelTitle}, year, month, date}, index) =>
      `<article class="clip">
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