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
        let histories =  JSON.parse(JSON.stringify(this.state["histories"]));
         histories.reverse();
        this.$element.innerHTML += histories.length > 0
        ?  histories.map((history, index) => 
          `<p id=${"history" + index}>${history}</p>`
        ).join("")
        : "없습니다";

    }



}