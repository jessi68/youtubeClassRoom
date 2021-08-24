

export default class Component {
  constructor({id, initialState = {}, ...props}) {
    this.$element = document.getElementById(id);
    console.log(initialState);
    this.state = initialState;
    this.props = props || {};
   
  }

  render() {

  }

   isEventType = function(key) {
    return key.substr(2) === "on";
  }

  isClassType = function(key) {
    return key === "className";
  }

  updateDom() {
    
    Object.entries(this.props).forEach(([key, property]) => {
      
      if (this.isEventType(key)) {
        const eventName = key.substr(2);
        this.$element.addEventListener(eventName, property);
        return;
      }
      if (this.isClassType(key)) {
        
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
