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
        this.state["histories"].push(keyword);
        this.render();
    }

    render() {
        this.$element.innerHTML = this.state["histories"].length > 0
        ?  this.state["histories"].splice().reverse().map((history, index) => {
            `<p id=${"history" + index}>${history}</p>`
        })
        : "최근 검색어가 없습니다";

        //this.state[stack][]
    }



}