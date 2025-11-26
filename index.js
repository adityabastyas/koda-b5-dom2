const inputPassword = document.querySelector('input[name="password"]');
const toggle = document.querySelector("#toggle");
const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");

toggle.addEventListener("click", () => {
  const isHidden = inputPassword.type === "password";
  if (isHidden) {
    inputPassword.type = "text";
    icon.style.display = "none";
    icon2.style.display = "block";
  } else {
    inputPassword.type = "password";
    icon.style.display = "block";
    icon2.style.display = "none";
  }
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }
});
