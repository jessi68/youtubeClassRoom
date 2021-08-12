import isEventType from "../../util/dom.js"
import isClassType from "../../util/dom.js"

export default class Component {

    constructor({$target, nodeName = 'div', initialState = {}, ...props}) {
        this.$target = $target
        this.$element = document.createElement(nodeName);
        this.state = initialState;
        this.props = props || {};
    }

    render() {

    }

    updateDom() {
        Object.entries(this.props).forEach(([key, property]) => {
            if(isEventType(key)) {
                let eventName = key.substr(2);
                this.$element.addEventListener(eventName, property);
                return;
            }
            if(isClassType(key)) {
                this.$element.classList.add(...property.split(' '));
                return;
            }
            
            this.$element[key] = property;

        });

    }

    renderComponent() {
        this.updateDom();
        this.render();
    }


}