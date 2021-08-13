import Component from "../base/component";

export default class SearchSubmit extends Component {

    constructor() {
        super(props);
        this.renderComponent();
        this.$target.appendChild(this.$element);
    }

    render() {
    }
}