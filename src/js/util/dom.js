const TOLERANCE_ERROR = 0.5;

const isScrollAtBottom = (target) => {
    console.log(Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight)))
    if(Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight)) < TOLERANCE_ERROR) {
        return true
    }

    return false
}

export default isScrollAtBottom;