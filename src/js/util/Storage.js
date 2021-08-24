let savedItem = 0;
const MAX_ITEM = 100;

let isPossibleForSave = () => {
    return savedItem <= MAX_ITEM;
}

export const getSavedItemNumber = () => {
    return savedItem;
}

export const saveItem = (id, content) => {
    if(isPossibleForSave()) {
        localStorage.setItem(id, content);
        savedItem++;
    }
}


