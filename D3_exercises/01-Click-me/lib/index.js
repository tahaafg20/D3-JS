const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  var button = document.querySelector(".btn-success");
  // TODO: Bind the `click` event to the button
  button.addEventListener("click", sayThanks);
  // TODO: On click, display `Thank you!` in a JavaScript alert!
  function sayThanks(){
    alert("Thank You");
  }
};

displayAlertOnButtonClick(); // Do not remove!
