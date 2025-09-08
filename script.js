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
