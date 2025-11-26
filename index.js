const inputPassword = document.querySelector('input[name="password"]');
const toggle = document.querySelector("#toggle");
const icon = document.querySelector(".icon");

toggle.addEventListener("click", () => {
  const isHidden = inputPassword.type === "password";
  if (isHidden) {
    inputPassword.type = "text";
    icon.style.fill = "red";
  } else {
    inputPassword.type = "password";
    icon.style.fill = "black";
  }
});
