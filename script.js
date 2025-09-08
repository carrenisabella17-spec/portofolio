document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Graphic Designer", "Illustrator", "front end developer", "arsitektur"];
  let index = 0;
  const roleElement = document.getElementById("role");

  function changeRole() {
    roleElement.textContent = roles[index];
    index = (index + 1) % roles.length;
  }

  // Tampilkan role pertama setelah nama muncul
  setTimeout(() => {
    changeRole();
    setInterval(changeRole, 2000); // ganti setiap 2 detik
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const openEyes = document.querySelector(".eyes.open");
  const closedEyes = document.querySelector(".eyes.closed");

  function blink() {
    // Mata tertutup
    closedEyes.style.opacity = 1;
    openEyes.style.opacity = 0;

    setTimeout(() => {
      // Mata terbuka lagi
      closedEyes.style.opacity = 0;
      openEyes.style.opacity = 1;
    }, 200); // durasi kedip (ms)
  }

  // Fungsi kedip random biar natural
  function startBlinking() {
    setInterval(() => {
      blink();
    }, Math.random() * 4000 + 2000); // antara 2 - 6 detik sekali
  }

  startBlinking();
});

