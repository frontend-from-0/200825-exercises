const form = document.getElementById("createUserForm");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNameValue = document.getElementById("firstName").value;
  const lastNameValue = document.getElementById("lastName").value;
  const ageValue = document.getElementById("age").value;

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstNameValue,
      lastName: lastNameValue,
      age: ageValue,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("An error occurred while adding user.");
      }
      return response.json();
    })
    .then((data) => {
      form.reset();
      statusContainer.classList.remove("hidden");
      status.textContent = `${data.firstName} ${data.lastName} successfully added! (API ID: ${data.id})`;
      status.style.color = "green";
    })
    .catch((error) => {
      console.error("Error:", error);
      statusContainer.classList.remove("hidden");
      status.textContent = "User could not be created. Please try again.";
      status.style.color = "red";
    });
});
