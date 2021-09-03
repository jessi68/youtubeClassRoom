import { $ } from "./dom";

let snackBarTemplate = (notification) => {
  return `
  <div id="snackbar">${notification}..</div>
  `;
}


function addSnackBar(notification) {
   $("app").innerHTML += snackBarTemplate(notification);
}

export default addSnackBar;