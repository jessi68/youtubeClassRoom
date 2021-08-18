import { getVideos } from '../../../api/youtubeApi.js';
import Component from '../../base/component.js';
import SearchSubmit from '../SearchSubmit.js';
import SearchInput from './searchInput.js';
import SearchResults from './SearchResults.js';
// <form class="d-flex">
//         <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" />
//         <button type="button" class="btn bg-cyan-500">검색</button>
//       </form>

export class Search{

  searchSubmit() {
    this.searchResults.setVideos(getVideos(this.searchInput.getValue()));
  }

  constructor($element) {
    this.$element = $element;
    this.state = {'keyword': ''};
    this.searchInput = new SearchInput({$target: this.$element, 
      id: 'search-input', initialState: {}});
    this.searchSubmit = new SearchSubmit({$target: this.$element, 
      id: 'submit-search', initialState : {},
          onclick: this.searchSubmit.bind(this)});
    this.searchResults = new SearchResults({$target: this.$element, 
      id: 'search-results', initialState: {"videos": []},
      className: "video-wrapper"});

  }
}
