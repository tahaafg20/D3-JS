const batch = "general"; // change to your own batch id
const baseUrl = "https://recode-chat.herokuapp.com/";

// Your turn to code!
var chatForm = document.querySelector("#comment-form");
var senderMessage = document.querySelector("textarea");
var senderName = document.querySelector("input");
var messages = document.querySelector("input");
var messagesList = document.querySelector("ul");

chatForm.addEventListener("submit", sendMessage);
chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function sendMessage() {
  var message = chatForm[0].value;
  var sender = chatForm[1].value;
  var date = new Date;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(`${message} (by ${sender}) (Posted on ${date}) `);
  node.appendChild(textnode);
  messagesList.appendChild(node);
}

fetch(baseUrl);
.then()
