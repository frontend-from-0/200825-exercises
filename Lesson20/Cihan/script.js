const dateInput = document.getElementById('date');
const selectedDate = document.getElementById('selected-date');
const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');
const nameInput = document.getElementById('name');
const mailInput = document.getElementById('mail');
const writtenName = document.getElementById('written-name');
const writtenMail = document.getElementById('written-mail');
const confirmedName = document.getElementById('confirmed-name');
const confirmedMail = document.getElementById('confirmed-mail');
const today = new Date();
const oneWeekLater = new Date();
oneWeekLater.setDate(today.getDate() + 7);

dateInput.min = today.toISOString().split('T')[0];
dateInput.max = oneWeekLater.toISOString().split('T')[0];


const data = {
  name: null,
  mail: null,
  date: null,
  time: null,
};

nameInput.addEventListener('input', function () {
    writtenName.textContent = nameInput.value;
    data.name = nameInput.value;
    allowSubmit();
});

mailInput.addEventListener('input', function () {
    writtenMail.textContent = mailInput.value;
    data.mail = mailInput.value;
    allowSubmit();
});

dateInput.addEventListener('change', function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener('click', () => showSelectedTime(button)),
);
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (!data.date && !data.time && !data.name && !data.mail) {
    return;
  }
  // bookingForm.classList.add('hidden');
  bookingForm.textContent = ''
  confirmedName.textContent = data.name;
  confirmedMail.textContent = data.mail;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmationMessage.classList.remove('hidden');
});

function showSelectedTime(button) {
  deselectTimeSlots();
  button.classList.add('selected');
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deselectTimeSlots() {
  [...timeSlotButtons].forEach((button) => button.classList.remove('selected'));
}

function allowSubmit() {
  if (data.date && data.time && data.name && data.mail) {
    confirmButton.removeAttribute('disabled');
  }
}