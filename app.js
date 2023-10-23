const btnTaranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");

btnTaranslate.addEventListener("click", clickEventHandler);

function clickEventHandler() {
    console.log("clicked");
    console.log("Input : " , txtInput.value);
}