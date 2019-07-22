// TODO: write your code here!
var football = document.querySelectorAll(".clickable")[0];
var volleyball = document.querySelectorAll(".clickable")[1];
var basketball = document.querySelectorAll(".clickable")[2];
var baseball = document.querySelectorAll(".clickable")[3];
var pingpong = document.querySelectorAll(".clickable")[4];
var hiking = document.querySelectorAll(".clickable")[5];

football.addEventListener("click", function() { addBorder(football); });
volleyball.addEventListener("click", function() { addBorder(volleyball); });
basketball.addEventListener("click", function() { addBorder(basketball); });
baseball.addEventListener("click", function() { addBorder(baseball); });
pingpong.addEventListener("click", function() { addBorder(pingpong); });
hiking.addEventListener("click", function() { addBorder(hiking); });

function addBorder(clickableItem) {
    clickableItem.classList.add("active");
}