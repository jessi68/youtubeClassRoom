const TOLERANCE_ERROR = 0.5;

const isScrollAtBottom = (target) => {
    if(Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight)) < TOLERANCE_ERROR) {
        return true
    }
    return false
}

export default isScrollAtBottom;