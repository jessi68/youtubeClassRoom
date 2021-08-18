import Component from "../../base/component";

export default class SearchResults extends Component {
    
    constructor(props) {
        super(props);
        this.renderComponent();
    }

    setVideos(videos) {
        this.state["videos"] = videos;
        this.render();
    }

    render() {
       videos.foreach((video) => {
           this.$element.innerHTML += `<article class="clip">
           <div class="preview-container">
             <iframe
               width="100%"
               height="118"
               src="https://www.youtube.com/embed/${video["id"]["channelId"]}"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
             ></iframe>
           </div>
           <div class="content-container pt-2 px-1">
             <h3>${video["snippet"]["title"]}</h3>
             <div>
               <a
                 href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
                 target="_blank"
                 class="channel-name mt-1"
               >
                  ${video["snippet"]["channelTitle"]}
               </a>
               <div class="meta">
                 <p>${video["year"]}년 ${video["month"]}월 ${video["date"]}일</p>
               </div>
               <div class="d-flex justify-end">
                 <button class="save-video">⬇️ 저장</button>
               </div>
             </div>
           </div>
         </article>`;
       }) 
    }
}