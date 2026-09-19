const form = document.getElementById("bookingForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(e){

  e.preventDefault();

  message.innerText =
  "Your Appointment Has Been Booked Successfully!";

  form.reset();

});