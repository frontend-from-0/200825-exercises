const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3}$/;


const formElement = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstnameError');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastnameError');
const cardInput = document.getElementById('cardnumber');
const cardError = document.getElementById('cardError');
const expInput = document.getElementById('expDate');
const expError = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');

let formCorrect = true;

emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
cardInput.addEventListener('blur', validateCard);
expInput.addEventListener('blur', validateExpDate);
cvvInput.addEventListener('blur', validateCVV);
firstNameInput.addEventListener('blur', () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener('blur', () =>
  validateName(lastNameInput, lastNameError),
);

function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = '';
  } else {
    emailError.innerText =
      'Please enter correct email address (e.g. john@gmail.com)';
    formCorrect = false;
  }
}

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = '';
  } else {
    phoneError.innerText =
      'Please enter correct phone number (e.g. 530 345 66 66)';
    formCorrect = false;
  }
}

function validateName(input, errorField) {
  if (input.value.trim() === '') {
    errorField.innerText = 'This field cannot be empty.';
    formCorrect = false;
    return;
  }
  if (input.value.length >= 50) {
    errorField.innerText = 'This field should contain less than 50 characters.';
    formCorrect = false;
  } else {
    if (onlyLettersPattern.test(input.value)) {
      errorField.innerText = '';
    } else {
      errorField.innerText = 'This field can only contain letters.';
      formCorrect = false;
    }
  }
}

function validateCard() {
  if (cardPattern.test(cardInput.value)) {
    cardError.innerText = '';
  } else {
    cardError.innerText = 'Please enter a valid card number (e.g., 1234 5678 9101 1121)';
    formCorrect = false;
  }
}

function validateExpDate() {
  if (expDatePattern.test(expInput.value)) {
    expError.innerText = '';
  } else {
    expError.innerText = 'Please enter a valid date (e.g., 01/26)';
    formCorrect = false;
  }
}

function validateCVV() {
  if (cvvPattern.test(cvvInput.value)) {
    cvvError.innerText = '';
  } else {
    cvvError.innerText = 'Please enter a valid 3-digit CVV.';
    formCorrect = false;
  }
}

cardInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  let formattedValue = value.match(/.{1,4}/g);

  if (formattedValue) {
    e.target.value = formattedValue.join(' ');
  } else {
    e.target.value = '';
  }
})

expInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 2) {
    e.target.value = value.substring(0,2) + '/' + value.substring(2, 4);
  } else {
    e.target.value = value;
  }
});

cvvInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCard();
  validateExpDate();
  validateCVV();

  if (formCorrect) {
    document.getElementById('success').classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});
