const updateUserForm = document.getElementById("updateUserForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");

let currentUserId = null;

if(currentUserId) {fetch("https://dummyjson.com/users/${currentUserId}"),
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUserData),
  }
    .then((response) => response.json())
    .then(console.log);}


document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("updatedUser"));

  if (userData) {
    firstNameInput.value = userData.firstName;
    lastNameInput.value = userData.lastName;
    ageInput.value = userData.age;
    currentUserId = userData.id;
  } else {
    alert("No user data found for update");
    window.location.href = "../index.html";
  }
});

updateUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const updatedUserData = {
    id: currentUserId,
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: Number(ageInput.value.trim()),
  };

  localStorage.setItem("updatedUser", JSON.stringify(updatedUserData));
  alert("User updated successfully!");
  window.location.href = "../index.html";
});
