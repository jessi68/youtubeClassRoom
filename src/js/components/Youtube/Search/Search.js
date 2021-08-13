import Component from '../../base/component';
import SearchSubmit from '../SearchSubmit';
import SearchInput from './searchInput';

// <form class="d-flex">
//         <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" />
//         <button type="button" class="btn bg-cyan-500">검색</button>
//       </form>

class Search extends Component {
  searchSubmit() {
    this.state['keyword'] = this.searchInput.getValue();
  }

  constructor(props) {
    super(props);
    this.state = {'keyword': ''};
    this.searchInput = new SearchInput(this.$element, 'input', {}
        , {className: 'w-100 mr-2 pl-2'});
    this.searchSubmit = new SearchSubmit(this.$element, 'button', {}
        , {className: 'btn bg-cyan-500',
          onclick: this.searchSubmit.bind(this)});
  }
}
