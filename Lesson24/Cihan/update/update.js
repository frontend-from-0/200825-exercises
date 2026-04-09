const form = document.getElementById("updateUser");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");

const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

if (!userId) {
  statusContainer.classList.remove("hidden");
  status.textContent = "User ID not found";
  throw new Error("No userId in URL");
}


fetch(`https://dummyjson.com/users/${userId}`)
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed fetching user");
    }
    return res.json();
  })
  .then(data => {
    document.getElementById("firstName").value = data.firstName;
    document.getElementById("lastName").value = data.lastName;
    document.getElementById("age").value = data.age;
  })
  .catch(err => {
    statusContainer.classList.remove("hidden");
    status.textContent = err.message;
  });


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedUser = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: Number(document.getElementById("age").value),
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Update failed");
      }
      return res.json();
    })
    .then((data) => {
      statusContainer.classList.remove("hidden");
      status.textContent = `User ${data.firstName} updated successfully`;

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 5000);
    })
    .catch(err => {
      statusContainer.classList.remove("hidden");
      status.textContent = err.message;
    });
});