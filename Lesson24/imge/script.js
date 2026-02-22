/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

// API to use in the lesson: https://dummyjson.com/docs/users

const usersContainer = document.getElementById('users');
const statusContainer = document.getElementById('statusContainer');
const status = document.getElementById('status');
const closeStatusButton = document.getElementById('closeStatusButton');

document.getElementById('getUsersButton').addEventListener('click', fetchUsers);
closeStatusButton?.addEventListener('click', () => hideStatus());

function showStatus(message) {
  status.textContent = message;
  statusContainer.classList.remove('hidden');
}

function hideStatus() {
  status.textContent = '';
  statusContainer.classList.add('hidden');
}

function clearUsers() {
  usersContainer.innerHTML = '';
}

const getUsersButton = document.getElementById('getUsersButton');

function fetchUsers() {
  hideStatus();
  clearUsers();

  getUsersButton.disabled = true;
  getUsersButton.setAttribute('aria-busy', 'true');
  showStatus('Loading users...');

  fetch('https://dummyjson.com/users')


    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed fetching all users (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.users || data.users.length === 0) {
        showStatus('No users found.');
        return;
      }

      data.users.forEach((user) => createUserCard(user));
      showStatus(`Loaded ${data.users.length} users.`);
    })
    .catch((error) => {
      // TODO: add logic to handle errors (e.g. display error message)
      console.error(error);
      showStatus(`Failed fetching users. Please try again.`);
    })
    .finally(() => {
    getUsersButton.disabled = false;
    getUsersButton.removeAttribute('aria-busy');
  });
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.userId = String(user.id);

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
  updateButton.textContent = 'Update user';
  updateButton.href = `./update/index.html?userId=${user.id}`;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button', 'button--danger');
  deleteButton.type = 'button';
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
  hideStatus();

  const card = usersContainer.querySelector(`[data-user-id="${userId}"]`)
  if (card) card.style.opacity = '0.6';

  const deleteBtn = card?.querySelector('button.button--danger');
  if (deleteBtn) deleteBtn.disabled = true;

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed deleting user ${userId} (${res.status})`);
      }

      return res.json();
    })
    .then(() => {
      // Show notification in the HTML that the user was deleted (and which user was deleted)
      // Remove the user card or change it's appearance so it's easy to understand that this user was deleted
      if (card) card.remove();
      showStatus(`User ${userId} deleted.`);
    })
    .catch((error) => {
      console.error(`Failed deleting user ${userId}`, error);
       if (card) card.style.opacity = '1';
       if (deleteBtn) deleteBtn.disabled = false;
       showStatus (`Failed deleting user ${userId}`);
    });
}
