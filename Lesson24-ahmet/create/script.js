document
  .getElementById("createUserForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      age: document.getElementById("age").value,
    };

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User created successfully with ID: " + data.id);
        window.location.href = "../index.html"; // Başarılıysa ana sayfaya dön
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to create user");
      });
  });
