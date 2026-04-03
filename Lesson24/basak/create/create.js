const userForm = document.getElementById("userForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");

document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("userList");
  const newUser = JSON.parse(localStorage.getItem("newUser"));
  if (newUser) {
    userList.innerHTML = `<p>Name: ${newUser.firstName} ${newUser.lastName}, Age: ${newUser.age}</p>`;
  } else {
    userList.innerHTML = "<p>No user found.</p>";
  }
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    firstNameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    ageInput.value.trim() === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const age = Number(ageInput.value.trim());
  if (isNaN(age) || age <= 0 || age > 120) {
    alert("Please enter a valid age between 1 and 120");
    return;
  }

  const newUser = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: age,
  };

  localStorage.setItem("newUser", JSON.stringify(newUser));
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
  alert("User created successfully");
  window.location.href = "../index.html";
});
