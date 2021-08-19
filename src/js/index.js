import { Modal } from "./util/Modal.js";


const $searchButton = document.querySelector("#search-button");


const modal = new Modal({className: ".modal", innerClassName: '.modal-inner'});
const $modalClose = document.querySelector(".modal-close");

$searchButton.addEventListener("click", modal.onModalShow);
$modalClose.addEventListener("click", modal.onModalClose);

