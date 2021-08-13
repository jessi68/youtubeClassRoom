export default class SearchInput extends Component {
    // <form class="d-flex">
    //         <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" />
    //         <button type="button" class="btn bg-cyan-500">검색</button>
    //       </form>
    constructor(props) {
        super(props);
        this.renderComponent();
        this.$target.appendChild(this.$element);
    }

    render() {
    }

    getValue() {
        return this.$element.value;
    }
}