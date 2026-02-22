const form = document.getElementById('createUserForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = '';

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = Number(document.getElementById('age').value);

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, age }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Create failed (${res.status})`);
      return res.json();
    })
    .then((created) => {
      formStatus.className = 'form-status success';
      formStatus.textContent = `Created user with id: ${created.id}`;
      setTimeout(() => (window.location.href = '../index.html'), 600);
    })
    .catch((err) => {
      console.error(err);
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Failed creating user.';
    });
});