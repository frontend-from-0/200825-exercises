const dateInput = document.getElementById('date');
const selectedDate = document.getElementById('selected-date');
const confirmButton = document.getElementById('confirm');
const timeSlotButtons = document.getElementsByClassName('slot');
const selectedTime = document.getElementById('selected-time');
const bookingForm = document.querySelector('form.booking');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');
const inputName = document.getElementById('username');
const selectedName = document.getElementById('selected-name');
const inputEmail = document.getElementById('email');
const selectedMail = document.getElementById('selected-email');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email')
let timeoutName = null;
let timeoutEmail = null;

function setMinDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); 
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  
  const minDate = `${year}-${month}-${day}`;
  dateInput.setAttribute('min', minDate);
}
setMinDate()
const data = {
  date: null,
  time: null,
  username: null,
  email: null
};

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
  
  if (!data.date || !data.time || !data.username || !data.email) {
    return;
  }
  // bookingForm.classList.add('hidden');
  bookingForm.textContent = '';
  confirmedEmail.textContent = data.email;
  confirmedName.textContent = data.username
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
  if (data.date && data.time && data.username && data.email) {
    confirmButton.removeAttribute('disabled');
  }
  else {
    confirmButton.setAttribute('disabled', 'true'); 
  }
}
inputName.addEventListener('input', () => {
  clearTimeout(timeoutName);
  timeoutName = setTimeout(() => {
  console.log("girdi var")
    if(inputName.value.trim() !== ""){
      selectedName.innerText = inputName.value;
      data.username = inputName.value
      
    } 
    else {
      selectedName.innerText = "-";
      data.username = null;
    }
    allowSubmit()
  }, 500)
})
inputEmail.addEventListener('input', () => {
  clearTimeout(timeoutEmail);
  timeoutEmail = setTimeout(() => {
  console.log("girdi var")
    if(inputEmail.value.trim() !== ""){
      selectedMail.innerText = inputEmail.value;
      data.email = inputEmail.value
      
    } 
    else {
    selectedMail.textContent = '-';
    data.email = null;

    }allowSubmit()
  }, 500)
})