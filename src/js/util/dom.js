export default isEventType = (key) => {
    return key.substr(2) === "on";
}

export default isClassType = (key) => {
    return key === "className";
}