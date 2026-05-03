const dateInput = document.getElementById("date");
const selectedDate = document.getElementById("selected-date");
const confirmButton = document.getElementById("confirm");
// DÜZELTME: "slot" yerine ".slot" (nokta eklendi)
const timeSlotButtons = document.querySelectorAll(".slot"); 
const selectedTime = document.getElementById("selected-time");
const bookingForm = document.querySelector("form.booking");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmationMessage = document.getElementById("confirmation-message");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const selectedName = document.getElementById("selected-name");
const selectedEmail = document.getElementById("selected-email");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");

// 3. ADIM: Min date ayarı (Yarın)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDateString = tomorrow.toISOString().split("T")[0];
dateInput.setAttribute("min", minDateString);

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

// Tarih değiştiğinde
dateInput.addEventListener("change", function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  allowSubmit();
});

// Saat butonları tıklama (Nokta düzelince burası çalışacak)
timeSlotButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Diğerlerinden seçili sınıfını kaldır
    timeSlotButtons.forEach((btn) => btn.classList.remove("selected"));
    // Tıklanana ekle
    this.classList.add("selected");

    selectedTime.textContent = this.textContent.trim();
    data.time = this.textContent.trim();
    allowSubmit();
  });
});

// 1. ve 2. ADIM: İsim ve Email (Yazmayı bırakınca - blur)
nameInput.addEventListener("blur", function () {
  selectedName.textContent = nameInput.value || "-";
  data.name = nameInput.value;
  allowSubmit();
});

emailInput.addEventListener("blur", function () {
  selectedEmail.textContent = emailInput.value || "-";
  data.email = emailInput.value;
  allowSubmit();
});

// Form Gönderimi
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!data.date || !data.time || !data.name || !data.email) {
    return;
  }
  
  // 5. ADIM: Tüm bilgileri onay mesajına aktar
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;

  bookingForm.classList.add("hidden");
  confirmationMessage.classList.remove("hidden");
});

function allowSubmit() {
  // Tüm alanlar doluysa butonu aç
  if (data.date && data.time && nameInput.value.trim() && emailInput.value.trim()) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}