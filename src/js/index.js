import { Modal } from "./components/Youtube/Modal.js";


const $searchButton = document.querySelector("#search-button");


const modal = new Modal({className: ".modal"});
const $modalClose = document.querySelector(".modal-close");

$searchButton.addEventListener("click", modal.onModalShow);
$modalClose.addEventListener("click", modal.onModalClose);

//let app = new App();

// let app = new App(document.getElementsByTagName("body")[0], 'div',
// {}, {className: 'app'});