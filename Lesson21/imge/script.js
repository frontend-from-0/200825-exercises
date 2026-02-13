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

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3}$/;
const nonDigitPattern = /\D/g;
const chunkOfFourPattern = /.{1,4}/g;

function setFieldState(inputEl, errorEl, message = '') {
  errorEl.textContent = message;
  inputEl.setAttribute('aria-invalid', message ? 'true' : 'false');
  return !message;
}

function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    return setFieldState(emailInput, emailError, '');
  }
  return setFieldState(
    emailInput,
    emailError,
    'Please enter correct email address (e.g. john@gmail.com)'
  );
}

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    return setFieldState(phoneInput, phoneError, '');
  }
  return setFieldState(
    phoneInput,
    phoneError,
    'Please enter correct phone number (e.g. 530 345 66 66)'
  );
}


function validateName(input, errorField) {
  const value = input.value.trim();

  if (value === '') {
    return setFieldState(input, errorField, 'This field cannot be empty.');
  }

  if (value.length >= 50) {
    return setFieldState(
      input,
      errorField,
      'This field should contain less than 50 characters.'
    );
  }

  if (!onlyLettersPattern.test(value)) {
    return setFieldState(input, errorField, 'This field can only contain letters.');
  }

  return setFieldState(input, errorField, '');
}


function validateCard() {
  if (cardPattern.test(cardInput.value)) return setFieldState(cardInput, cardError, '');
  return setFieldState(cardInput, cardError, 'Please enter a valid card number (e.g., 1234 5678 9101 1121)');
}

function validateExpDate() {
  if (expDatePattern.test(expInput.value)) return setFieldState(expInput, expError, '');
  return setFieldState(expInput, expError, 'Please enter a valid date (e.g., 01/26)');
}

function validateCVV() {
  if (cvvPattern.test(cvvInput.value)) return setFieldState(cvvInput, cvvError, '');
  return setFieldState(cvvInput, cvvError, 'Please enter a valid 3-digit CVV.');
}


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

cardInput.addEventListener('input', (e) => {
  const value = e.target.value.replace(nonDigitPattern, '');
  const formattedValue = value.match(chunkOfFourPattern);

  e.target.value = formattedValue ? formattedValue.join(' ') : '';
});

expInput.addEventListener('input', (e) => {
  const value = e.target.value.replace(nonDigitPattern, '');

  e.target.value = value.length > 2
    ? value.substring(0, 2) + '/' + value.substring(2, 4)
    : value;
});

cvvInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(nonDigitPattern, '').substring(0, 3);
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const isValid =
    validateEmail() &&
    validatePhone() &&
    validateName(firstNameInput, firstNameError) &&
    validateName(lastNameInput, lastNameError) &&
    validateCard() &&
    validateExpDate() &&
    validateCVV();

  if (isValid) {
    document.getElementById('success').classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});
