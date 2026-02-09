const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3}/;


const formElement = document.getElementById('checkoutForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstnameError');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastnameError');
const cardNumberInput = document.getElementById('cardnumber');
const cardNumberError = document.getElementById('cardnumberError');
const expDate = document.getElementById('expDate');
const expDateError = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');
let formCorrect = true;
cardNumberInput.setAttribute('maxlength', 19)


emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
firstNameInput.addEventListener('blur', () =>
  validateName(firstNameInput, firstNameError),
);
lastNameInput.addEventListener('blur', () =>
  validateName(lastNameInput, lastNameError),
);
cardNumberInput.addEventListener('blur', validateCardNumber);
cardNumberInput.addEventListener('input',(e) => {
  let cardValue = e.target.value.replace(/\D/g,'');
  let formattedCardValue = cardValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  e.target.value = formattedCardValue;
})
expDate.addEventListener('blur', validateExpDate);
expDate.addEventListener('input', (dateValue) => {
  let date = dateValue.target.value.replace(/\D/g,'').slice(0,4);
  if(date.length>2){
    
    let month = parseInt(date.substring(0,2));
    if(month > 12){
      console.log('12den büyük')
      date = '12' + date.substring(2)
    }
  }
  let formattedDate = date.replace(/(\d{2})(?=\d)/g,'$1/');
  dateValue.target.value = formattedDate;
  
})
cvvInput.addEventListener('blur',validateCVV);
cvvInput.addEventListener('input', (cvvNumber) => {
  let userInputCVV = cvvNumber.target.value.replace(/\D/g,'').slice(0,3);
  cvvNumber.target.value = userInputCVV
})
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

function validateCardNumber(){
  if(cardPattern.test(cardNumberInput.value)){
    cardNumberError.innerText = '';
  }
  else {
    cardNumberError.innerText = 'Incomplete or incorrect information.';
    formCorrect = false;
  }

}
function validateExpDate(){
  if(expDatePattern.test(expDate.value)){
    expDateError.innerText = '';
  }
  else {
    expDateError.innerText = 'Please enter valid expression date.'
  }
}

function validateCVV(){
  if(cvvPattern.test(cvvInput.value)){
    cvvError.innerText = '';
    
  }
  else {
    cvvError.innerText = 'Please enter CVV code which existing on behind your card.'
  }
}

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  formCorrect = true;
  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCardNumber();
  validateExpDate();
  validateCVV();

  if (formCorrect) {
    document.getElementById('success').classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});




