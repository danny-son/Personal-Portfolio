const form = document.querySelector(".contact-form");
const snackbar = document.querySelector("#snackbar-message");

function sendEmail() {
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var message = document.getElementById("form-message").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dannyson900@gmail.com",
    Password: "B289D527FEB7DBBC37D7B10C8CE60827103A",
    To: "dannyson900@gmail.com",
    From: "dannyson900@gmail.com",
    Subject: "Personal Website New Message!",
    Body: "Name: " + name + "<br> Email: " + email + "<br> Message: " + message,
  });
}
function observeSendButton() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail();
    animateSnackMessage();
  });
}

/**
 * Performs an animation of a message bar that the form was submitted to me!
 */
function animateSnackMessage() {
  snackbar.style.animation = `snackbar-appear 1.0s ease forwards`;
  setTimeout(() => {
    snackbar.style.animation = `snackbar-disappear 1.0s ease forwards`;
  }, 2000);
}

observeSendButton();
