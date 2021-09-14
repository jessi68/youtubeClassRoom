import HistoryStack from '../../../util/HistoryStack.js';
import { getSavedItemNumber } from '../../../util/Storage.js';
import { SavedVideos } from '../SavedVideos/SavedVideos.js';
import SearchSubmit from '../SearchSubmit.js';
import SearchFilter from './SearchFilter.js';
import SearchInput from './searchInput.js';
import SearchResults from './SearchResults.js';
// <form class="d-flex">
//         <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" />
//         <button type="button" class="btn bg-cyan-500">검색</button>
//       </form>

export class YoutubeMeditator{

  search = (event) => {
    this.searchResults.setEmpty();
    this.state['keyword'] = this.searchInput.getKeyword();
    this.searchResults.addVideosBy(this.state['keyword']);
    this.saveKeyword(); 
    //this.searchInput.setTextEmpty();
  }

  saveKeyword() {
    if(this.state["keyword"] != "") {
      this.recentSearchedWords.tryAddRecentHistory(this.state['keyword']);
      this.state["keyword"] = "";
    }
  }
  

  constructor($element) {
    this.$element = $element;
    this.state = {'keyword': ''};
    this.searchInput = new SearchInput({
      id: 'search-input', initialState: {}});
    this.searchSubmit = new SearchSubmit({ 
      id: 'submit-search', initialState : {},
          onclick: this.search});
    this.searchResults = new SearchResults({ 
      id: 'search-results', initialState: {"videos": [], "nextPageToken": ""}});
    this.recentSearchedWords = new HistoryStack({
        id:"recent-keyword", initialState: {"maxKeywordNumber" : 3}
    });
    
    this.savedVideos = new SavedVideos({id: "saved-video",  initialState: {"savedNumber":getSavedItemNumber()}});
    this.searchResults.addObserver(this.savedVideos);

    this.willSeeFilter = new SearchFilter({id:"will-see", initialState: {}, onclick: this.savedVideos.showOnlyUnseenVideos});
    this.unSeeFilter = new SearchFilter({id: "unsee", onclick: this.savedVideos.showOnlySeenVideos});


  }
}
