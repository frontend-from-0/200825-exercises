const form = document.getElementById("updateUserForm");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

if (userId) {
  fetch(`https://dummyjson.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Unable to fetch user data.");
      return response.json();
    })
    .then((data) => {
      document.getElementById("firstName").value = data.firstName;
      document.getElementById("lastName").value = data.lastName;
      document.getElementById("age").value = data.age;
    })
    .catch((error) => {
      console.error(error);
      statusContainer.classList.remove("hidden");
      status.textContent =
        "An error occurred while fetching user data. Please try again.";
      status.style.color = "red";
    });
} else {
  statusContainer.classList.remove("hidden");
  status.textContent = "Unable to load user data.";
  status.style.color = "red";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const updatedFirstName = document.getElementById("firstName").value;
  const updatedLastName = document.getElementById("lastName").value;
  const updatedAge = document.getElementById("age").value;

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: updatedFirstName,
      lastName: updatedLastName,
      age: updatedAge,
    }),
  })
    .then((response) => {
      if (!response.ok)
        throw new Error("An error occurred while updating user data.");
      return response.json();
    })
    .then((data) => {
      statusContainer.classList.remove("hidden");
      status.textContent = "User data updated successfully!";
      status.style.color = "green";
    })
    .catch((error) => {
      console.error("Error:", error);
      statusContainer.classList.remove("hidden");
      status.textContent = "User data could not be updated. Please try again.";
      status.style.color = "red";
    });
});
