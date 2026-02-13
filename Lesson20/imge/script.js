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
  name: '',
  email: '',
  date: null,
  time: null,
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDateStr = tomorrow.toISOString().split('T')[0];
dateInput.min = minDateStr;

nameInput.addEventListener('change', (e) => {
  data.name = e.target.value;
  summaryName.textContent = e.target.value || '-';
  allowSubmit(); 
});

emailInput.addEventListener('change', (e) => {
  data.email = e.target.value;
  summaryEmail.textContent = e.target.value || '-';
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

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (!data.name || !data.email || !data.date || !data.time) {
    return;
  } 

  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
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
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', 'true');
  }
}
