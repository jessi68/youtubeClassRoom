let savedItem = 0;
const MAX_ITEM = 100;

let isPossibleForSave = () => {
    return saveItem <= MAX_ITEM;
}

let getSavedItem = () => {
    return saveItem;
}

let saveItem = (id, content) => {
    if(isPossibleForSave()) {
    localStorage.setItem(id, content);
    saveItem++;
    }
}