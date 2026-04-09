const form = document.getElementById("createUser");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUser = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: Number(document.getElementById("age").value),
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("User creation failed");
      }
      return res.json();
    })
    .then((data) => {
      statusContainer.classList.remove("hidden");
      status.textContent = `User ${data.firstName} created successfully`;
      form.reset();

      document.getElementById("closeButton").onclick = () => {
      statusContainer.classList.add("hidden");
      };
    })
    .catch(() => {
      statusContainer.classList.remove("hidden");
      status.textContent = "Failed creating user";
    });
});
