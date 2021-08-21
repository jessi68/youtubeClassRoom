const TOLERANCE_ERROR = 0.5;

const isScrollAtBottom = (target) => {
    let diff = Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight));
    console.log(diff);
    if(diff < TOLERANCE_ERROR) {
        return true
    }
    return false
}

export default isScrollAtBottom;