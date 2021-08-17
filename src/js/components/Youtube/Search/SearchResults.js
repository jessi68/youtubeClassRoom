import Component from "../../base/component";

export default class SearchResults extends Component {
    
    constructor(props) {
        super(props);
        this.renderComponent();
    }

    setKeyWord(keyWord) {
        this.state["keyword"] = keyWord;
        this.render();
    }

    render() {

    }
}