import Component from "../base/component";

class Loading extends Component{
    constructor(...props) {
        super(props);
        this.state = {isLoading: true, data: []};
    }

    render() {
        if(this.state[isLoading]) {
            this.$element.innerHTML = "<h1>로딩 중입니다.</h1>";
        } else{
            this.$element.innerHTML = "";
        }
    }
}