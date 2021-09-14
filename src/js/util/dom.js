export let foundByClassName = (parentNode, className) => {
    return parentNode.querySelector(className);
    // querySelector 는 parentNode 가 갖고 있는 여러 class 들 중에 className 을 
    // 포함하고 있는지 아닌지를 확인한다.
}

export let $ = (id) => {
    return document.getElementById(id);
}

export let addEventFunction = (node, eventType, func) => {
    node.addEventListener(eventType, func);
}

export let removeSpecificClass = (node, className) => {
    node.classList.remove(className);
}

