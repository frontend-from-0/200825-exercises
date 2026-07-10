const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");

const updateForm = document.getElementById("updateUserForm");

if (userId) {
  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
      document.getElementById("firstName").value = user.firstName;
      document.getElementById("lastName").value = user.lastName;
      document.getElementById("age").value = user.age;
    })
    .catch((err) => console.error("Kullanıcı verisi alınamadı:", err));
}

updateForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const updatedData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`${data.firstName} başarıyla güncellendi!`);
      window.location.href = "../index.html"; // Ana sayfaya yönlendir
    })
    .catch((err) => {
      console.error("Güncelleme hatası:", err);
      alert("Güncelleme yapılamadı.");
    });
});
