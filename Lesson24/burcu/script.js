const closeStatusButton = document.querySelector("#statusContainer button");

closeStatusButton.addEventListener("click", () => {
  statusContainer.classList.add("hidden");
});
const usersContainer = document.getElementById("users");
const statusContainer = document.getElementById("statusContainer");
const status = document.getElementById("status");

document.getElementById("getUsersButton").addEventListener("click", fetchUsers);

function fetchUsers() {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Failed fetching all users`,
          response.status,
          response.statusText,
        );
      }
      return response.json();
    })
    .then((data) => {
      usersContainer.innerHTML = "";
      data.users.forEach((user) => createUserCard(user));
    })

    .catch((error) => {
      console.error("Failed fetching all users", error);
      statusContainer.classList.remove("hidden");
      status.textContent =
        "Failed fetching all users. Please check the console for more details.";
      status.style.color = "red";
    });
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = user.firstName + " " + user.lastName;

  const cardBody = document.createElement("p");
  cardBody.classList.add("card-body");
  cardBody.textContent = "Age: " + user.age;

  const cardCtas = document.createElement("div");
  cardCtas.classList.add("ctas");

  const updateButton = document.createElement("a");
  updateButton.classList.add("button");
  updateButton.textContent = "Update user";
  updateButton.href = `./update/index.html?userId=${user.id}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button");
  deleteButton.textContent = "Delete User";

  deleteButton.addEventListener("click", () => deleteUser(user.id, card));

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  cardCtas.appendChild(updateButton);
  cardCtas.appendChild(deleteButton);

  card.appendChild(cardCtas);

  usersContainer.appendChild(card);
}

function deleteUser(userId, cardElement) {
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Failed deleting user ${userId}`,
          response.status,
          response.statusText,
        );
      }

      return response.json();
    })
    .then((data) => {
      cardElement.remove();

      statusContainer.classList.remove("hidden");
      status.textContent = `${data.firstName} ${data.lastName} was successfully deleted.`;
      status.style.color = "green";
    })
    .catch((error) => {
      console.error(`Failed deleting user ${userId}`, error);
      statusContainer.classList.remove("hidden");
      status.textContent = `Failed deleting user (ID: ${userId})`;
      status.style.color = "red";
    });
}

