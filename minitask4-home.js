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

const logout = document.querySelector("#navMenu li:nth-child(4) a");

logout.addEventListener("click", (e) => {
  e.preventDefault();

  window.localStorage.removeItem("name");
  window.localStorage.removeItem("password");

  window.location.replace("./minitask4.html");
});
