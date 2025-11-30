const inputUserName = document.querySelector("#inputText");

const inputPassword = document.querySelector(".inputPassword");

const spanText = document.querySelector("#spanText");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputUserName.value || !inputPassword.value) {
    spanText.textContent = "username & password can not empty";
    return;
  }

  if (inputPassword.value.length < 5) {
    spanText.textContent = "password lenght must be 5 characters or more";
    return;
  }

  window.localStorage.setItem(
    "name",
    JSON.stringify(btoa(inputUserName.value))
  );
  window.localStorage.setItem(
    "password",
    JSON.stringify(btoa(inputPassword.value))
  );

  // window.location.href = "./minitask4-home.html";
  window.location.replace("./minitask4-home.html");
});
