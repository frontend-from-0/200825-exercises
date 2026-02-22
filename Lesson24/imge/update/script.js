const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');

const form = document.getElementById('updateUserForm');
const formStatus = document.getElementById('formStatus');
const userInfo = document.getElementById('userInfo');

if (!userId) {
  formStatus.textContent = 'Missing userId in URL.';
} else {
  loadUser(userId);
}

function loadUser(id) {
  formStatus.textContent = 'Loading...';

  fetch(`https://dummyjson.com/users/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Load failed (${res.status})`);
      return res.json();
    })
    .then((user) => {
      document.getElementById('firstName').value = user.firstName ?? '';
      document.getElementById('lastName').value = user.lastName ?? '';
      document.getElementById('age').value = user.age ?? '';
      userInfo.textContent = `Editing user #${user.id}`;
      formStatus.textContent = '';
    })
    .catch((err) => {
      console.error(err);
      formStatus.textContent = 'Failed loading user.';
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = Number(document.getElementById('age').value);

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, age }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Update failed (${res.status})`);
      return res.json();
    })
    .then(() => {
      formStatus.className = 'form-status success';
      formStatus.textContent = 'User updated!';
      setTimeout(() => (window.location.href = '../index.html'), 600);
    })
    .catch((err) => {
      console.error(err);
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Failed updating user.';
    });
});