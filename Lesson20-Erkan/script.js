const dateInput = document.getElementById('date');
const selectedDate = document.getElementById('selected-date');
const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const previewButton = document.getElementById('preview');

const minDate = new Date();
minDate.setDate(minDate.getDate() + 1); // yarın

dateInput.min = minDate.toISOString().split('T')[0];


previewButton.addEventListener('click', function () {
  data.name = usernameInput.value.trim();
  data.email = emailInput.value.trim();
  if (!data.name || !data.email) {
    alert('Please enter name and email');
    return;
  }

  selectedName.textContent = data.name;
  selectedEmail.textContent = data.email;
});

previewButton.addEventListener('click', () => {
  allowSubmit();
});



const data = {
  date: null,
  time: null,
  name: null,
  email: null,
};

dateInput.addEventListener('change', function () {
  const selected = new Date(dateInput.value);
  const today = new Date();

  
  today.setHours(0, 0, 0, 0);

  if (selected <= today) {
    alert('You can only select dates starting from tomorrow');
    dateInput.value = '';
    selectedDate.textContent = '-';
    data.date = null;
    allowSubmit();
    return;
  }

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

    if (!data.date || !data.time || !data.name || !data.email) {
    alert('Please fill all fields');
    return;
  }

  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  document.getElementById('confirmed-name').textContent = data.name;

  bookingForm.classList.add('hidden');
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
  }
}