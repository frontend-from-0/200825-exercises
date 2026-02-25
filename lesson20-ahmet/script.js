const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const selectedName = document.getElementById("selected-name");
const selectedEmail = document.getElementById("selected-email");
const selectedDate = document.getElementById("selected-date");
const selectedTime = document.getElementById("selected-time");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmButton = document.getElementById("confirm");
const timeSlotButtons = document.getElementsByClassName("slot");
const bookingForm = document.querySelector("form.booking");
const confirmationMessage = document.getElementById("confirmation-message");

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

const today = new Date();
today.setDate(today.getDate() + 1);
const minDate = today.toISOString().split("T")[0];
dateInput.setAttribute("min", minDate);

nameInput.addEventListener("blur", function () {
  selectedName.textContent = nameInput.value || "-";
  data.name = nameInput.value;
  allowSubmit();
});

emailInput.addEventListener("blur", function () {
  selectedEmail.textContent = emailInput.value || "-";
  data.email = emailInput.value;
  allowSubmit();
});

dateInput.addEventListener("change", function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener("click", () => showSelectedTime(button)),
);
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!data.name || !data.email || !data.date || !data.time) {
    return;
  }
  bookingForm.classList.add("hidden");
  bookingForm.textContent = "";
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmationMessage.classList.remove("hidden");
});

function showSelectedTime(button) {
  deselectTimeSlots();
  button.classList.add("selected");
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deselectTimeSlots() {
  [...timeSlotButtons].forEach((button) => button.classList.remove("selected"));
}

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}
