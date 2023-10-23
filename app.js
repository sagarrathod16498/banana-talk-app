const btnTaranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

btnTaranslate.addEventListener("click", clickEventHandler);

function clickEventHandler() {
    outputDiv.innerText= "jajajajajajajajajaj " + txtInput.value;
};

// outputDiv.innerText ="Sagar Rathod";

