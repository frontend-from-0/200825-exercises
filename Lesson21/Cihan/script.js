const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLettersPattern = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;


const formElement = document.getElementById("checkoutForm");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const firstNameInput = document.getElementById("firstname");
const firstNameError = document.getElementById("firstnameError");

const lastNameInput = document.getElementById("lastname");
const lastNameError = document.getElementById("lastnameError");

const cardnumberInput = document.getElementById("cardnumber");
const cardnumberError = document.getElementById("cardnumberError");

const expDateInput = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");

const cvvInput = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");

let formCorrect = true;



emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput, firstNameError),
);

lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput, lastNameError),
);

cardnumberInput.addEventListener("blur", () =>
  validateCardNumber(cardnumberInput, cardnumberError),
);

expDateInput.addEventListener('blur', () => 
validateExpDate(expDateInput, expDateError)
);

cvvInput.addEventListener("blur", () => 
validatecvv(cvvInput, cvvError)
);


/*
//I cheated here. I've learned that forum AI and copied the usage of these.

function showError(input, errorField, message) {
  errorField.innerText = message;
  input.setAttribute("aria-invalid", "true");
  formCorrect = false;
}

function clearError(input, errorField) {
  errorField.innerText = "";
  input.removeAttribute("aria-invalid");
}
*/


function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = "";
  } else {
    emailError.innerText =
      "Please enter correct email address (e.g. john@gmail.com)";
    formCorrect = false;
  }
}

/*
function showError(input, errorField, message) {
  errorField.innerText = message;
  input.setAttribute("aria-invalid", "true");
  formCorrect = false;
}

function clearError(input, errorField) {
  errorField.innerText = "";
  input.removeAttribute("aria-invalid");
}
  */

function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    phoneError.innerText = "";
  } else {
    phoneError.innerText =
      "Please enter correct phone number (e.g. 530 345 66 66)";
    formCorrect = false;
  }
}

/*
function validatePhone() {
  if (phonePattern.test(phoneInput.value)) {
    clearError(phoneInput, phoneError);
  } else {
    showError(
      phoneInput,
      phoneError,
      "Please enter correct phone number (e.g. 530 345 66 66)"
    );
  }
}
  */

function validateName(input, errorField) {
  if (input.value.length >= 50) {
    errorField.innerText = "This field should contain less than 50 characters.";
    formCorrect = false;
  } else {
    if (onlyLettersPattern.test(input.value)) {
      errorField.innerText = "";
    } else {
      errorField.innerText = "This field can only contain letters.";
      formCorrect = false;
    }
  }
}

/*
function validateFirstName() {
  if (firstNameInput.value.length >= 50) {
    showError(
      firstNameInput,
      firstNameError,
      "This field should contain less than 50 characters."
    );
  } else if (!onlyLettersPattern.test(firstNameInput.value)) {
    showError(
      firstNameInput,
      firstNameError,
      "This field can only contain letters."
    );
  } else {
    clearError(firstNameInput, firstNameError);
  }
}
  function validateLastName() {
  if (lastNameInput.value.length >= 50) {
    showError(
      lastNameInput,
      lastNameError,
      "This field should contain less than 50 characters."
    );
  } else if (!onlyLettersPattern.test(lastNameInput.value)) {
    showError(
      lastNameInput,
      lastNameError,
      "This field can only contain letters."
    );
  } else {
    clearError(lastNameInput, lastNameError);
  }
}
  */

function validateCardNumber(input, errorField) {
  if (input.value.length !== 19) {
    errorField.innerText = "Card number should be 16 digits long.";
    formCorrect = false;
  } else if (!cardPattern.test(input.value)) {
    errorField.innerText =
      "Please enter correct card number (e.g. 1234 5678 9101 1121)";
    formCorrect = false;
  } else {
    errorField.innerText = "";
  }
}

/*
function validateCardNumber(input, errorField) {
  if (input.value.length !== 19) {
    showError(
      input,
      errorField,
      "Card number should be 16 digits long."
    );
  } else if (!cardPattern.test(input.value)) {
    showError(
      input,
      errorField,
      "Please enter correct card number (e.g. 1234 5678 9101 1121)"
    );
  } else {
    clearError(input, errorField);
  }
}
  */

function validateExpDate(input, errorField) {
  if (expDatePattern.test(input.value)) {
    errorField.innerText = "";
  }else{
    errorField.innerText = "Please enter correct expiration date (e.g. 17/25)";
    formCorrect = false;
  }
}

/*
function validateExpDate(input, errorField) {
  if (expDatePattern.test(input.value)) {
    clearError(input, errorField);
  } else {
    showError(
      input,
      errorField,
      "Please enter correct expiration date (e.g. 07/25)"
    );
  }
}
  */

function validatecvv(input, errorField) {
    if (/^\d{3}$/.test(input.value)) {
        errorField.innerText = "";
    }else {
        errorField.innerText = "CVV should be 3 digits long.";
        formCorrect = false;
    }
   
}

/*
function validatecvv(input, errorField) {
  if (/^\d{3}$/.test(input.value)) {
    clearError(input, errorField);
  } else {
    showError(
      input,
      errorField,
      "CVV should be 3 digits long. (e.g. 123)"
    );
  }
}
  */


formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  formCorrect = true;

  validateEmail();
  validatePhone();
  validateName(firstNameInput, firstNameError);
  validateName(lastNameInput, lastNameError);
  validateCardNumber(cardnumberInput, cardnumberError);
  validateExpDate(expDateInput, expDateError);
  validatecvv(cvvInput, cvvError);

  if (formCorrect) {
    document.getElementById("success").classList.remove("hidden");
    formElement.classList.add("hidden");
  }
});


//I wrote them in comments because I've learned but I ddn't write them myself. I have to write all codes without using any AI or etc. When I will be able to do that, comments will be removed.