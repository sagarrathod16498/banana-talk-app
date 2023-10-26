const btnTaranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

// const serverURL = "https:lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + text;
}

function errorHandler (error){
    console.log("occure error" + error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    // outputDiv.innerText= "jajajajajajajajajaj " + txtInput.value;
    var inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler);
};

// outputDiv.innerText ="Sagar Rathod";
btnTaranslate.addEventListener("click", clickEventHandler);

