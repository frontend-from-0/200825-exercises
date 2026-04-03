
// API to use in the lesson: https://dummyjson.com/docs/users

const usersContainer = document.getElementById('users');
const statusContainer = document.getElementById('statusContainer');
const status = document.getElementById('status');
const closeButton=document.getElementById('closeButton');

closeButton.addEventListener('click', () => {
  statusContainer.classList.add('hidden');
})

document.getElementById('getUsersButton').addEventListener('click', fetchUsers);

function fetchUsers() {
  fetch('https://dummyjson.com/users')
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
     usersContainer.innerHTML = '';
     data.users.forEach((user) => createUserCard(user));
      })
    .catch((error) => {
      statusContainer.classList.remove('hidden');
      status.textContent = `Failed fetching users!`;
    });
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.userId = user.id;

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = user.firstName + ' ' + user.lastName;

  const cardBody = document.createElement('p');
  cardBody.classList.add('card-body');
  cardBody.textContent = 'Age: ' + user.age;

  const cardCtas = document.createElement('div');
  cardCtas.classList.add('ctas');

  const updateButton = document.createElement('a');
  updateButton.classList.add('button');
  updateButton.textContent = 'Update User';
  updateButton.href = './update/index.html';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button');
  deleteButton.textContent = 'Delete User';

  deleteButton.addEventListener('click', () => deleteUser(user.id));

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  cardCtas.appendChild(updateButton);
  cardCtas.appendChild(deleteButton);

  card.appendChild(cardCtas);

  usersContainer.appendChild(card);
}

function deleteUser(userId) {
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'DELETE',
  })
    .then((respond) => {
      if (!respond.ok) {
        throw Error(
          `Failed deleting user ID:${userId}: ${respond.status} ${respond.statusText}`
        );
      }

      return respond.json();
    })
    .then(() => {

      statusContainer.classList.remove('hidden');
      status.textContent = `User with ID ${userId} is deleted successfully!`;

      const card = usersContainer.querySelector(`[data-user-id="${userId}"]`);
      if (card) {
        card.remove();
      }
      usersContainer.classList.remove('hidden');

    })
    .catch((error) => {
      statusContainer.classList.remove('hidden');
      status.textContent = `Failed deleting user ID:${userId}`;
    })
}
