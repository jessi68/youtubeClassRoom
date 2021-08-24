import { SavedVideos } from "./js/components/Youtube/SavedVideos/SavedVideos.js";
import { Modal } from "./js/util/Modal.js";
import { getSavedItemNumber } from "./js/util/Storage.js";


const $searchButton = document.querySelector("#search-button");


const modal = new Modal({className: ".modal", innerClassName: '.modal-inner'});
const $modalClose = document.querySelector(".modal-close");

$searchButton.addEventListener("click", modal.onShow);
$modalClose.addEventListener("click", modal.onClose);


const savedVideos = new SavedVideos({id: "saved-video",  initialState: {"savedNumber":getSavedItemNumber()}});