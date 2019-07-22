// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector("input");
var listItems = document.querySelector("#results");

input.addEventListener("change", getInput);
// input.addEventListener("change", showResult);
input.addEventListener("keyup", getInput);
// input.addEventListener("keydown", getInput);

function getInput(e) {
    var givenWord = e.srcElement.value;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                deleteChild();
                var items = JSON.parse(request.response);
                for (var key in items.words) {
                    var node = document.createElement("LI");
                    var textnode = document.createTextNode(`${items.words[key]}`);
                    node.appendChild(textnode);
                    listItems.appendChild(node);
                    items.words[key];
                }
            }

        }
        if (request.status === 404) {
            console.log("Word not found");
        }
    }
    request.open("GET", `https://recode-dictionary.herokuapp.com/autocomplete/${givenWord}`, true);
    request.send();
    // console.log(request.response);
}

function deleteChild() {
    var e = document.querySelector("ul");
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

// function showResult() {
//    
// }



// request.open("GET", `https://recode-dictionary.herokuapp.com/autocomplete/${getInput()}`, true);
// request.send();