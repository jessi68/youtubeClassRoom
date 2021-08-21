import Component from "../components/base/component.js";

export default class HistoryStack extends Component {
    constructor(props) {
        super(props);
        this.state["histories"] = []
        this.state["currentLength"] = 0;
        this.updateDom();
    }

    isPossibleToAdd = () => {
        return this.state["currentLength"] <= this.state["maxKeywordNumber"];
    }

    removeMostOld = () => {
        this.state["histories"].splice(0, 1);
    }

    tryAddRecentHistory = (keyword) => {
        if(!this.isPossibleToAdd(keyword)) {
            this.removeMostOld();
        }
        let index = this.state["currentLength"];
        this.addRecentHistory(keyword);
        this.addHistoryToView(keyword, this.state["currentLength"], index);
    }

    addRecentHistory = (keyword) => {
        this.state["histories"].push(keyword);
        this.state["currentLength"] += 1;
    }

    addHistoryToView(keyword, index) {
        this.$element.innerHTML += `${keyword} &nbsp`;
    }

}