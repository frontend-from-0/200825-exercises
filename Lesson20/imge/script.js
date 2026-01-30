const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const summaryName = document.getElementById('selected-name');
const summaryEmail = document.getElementById('selected-email');
const selectedDate = document.getElementById('selected-date');
const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');

const data = {
  date: null,
  time: null,
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDateStr = tomorrow.toISOString().split('T')[0];
dateInput.min = minDateStr;

nameInput.addEventListener('change', (e) => {
  summaryName.textContent = e.target.value || '-';
});

emailInput.addEventListener('change', (e) => {
  summaryEmail.textContent = e.target.value || '-';
});

dateInput.addEventListener('change', function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

[...timeSlotButtons].forEach((button) =>
  button.addEventListener('click', () => showSelectedTime(button)),
);

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (!data.date || !data.time) {
    return;
  }

  confirmedName.textContent = nameInput.value;
  confirmedEmail.textContent = emailInput.value;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;

  bookingForm.textContent = ''; 
  
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
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', 'true');
  }
}