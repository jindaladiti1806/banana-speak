let button = document.querySelector(".button");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

function translate() {
    const URL = `https://api.funtranslations.com/translate/minion.json?text=${input.value}`;
    fetch(URL)
        .then((response) => response.json())
        .then((json) => {
            if (json.error == undefined)
                return (output.innerText = json.contents.translated);
            return (output.innerText = json.error.message);
        });
}

button.addEventListener("click", translate);
