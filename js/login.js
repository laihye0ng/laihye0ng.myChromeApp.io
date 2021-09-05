const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");
const body = document.querySelector("body");
const USERNAME_KEY = "username";
const localUsername = localStorage.getItem(USERNAME_KEY);

const toDo = document.querySelector("#todo");
const weather = document.querySelector("#weather");

function handleLogIn(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  logedIn(username);
}

function logedIn(username) {
  const helloNode = document.createElement("a");
  const helloText = document.createTextNode(`Hello ${username}`);
  helloNode.appendChild(helloText);
  hello.appendChild(helloNode);
  hello.classList.remove("hidden");
  body.removeChild(loginForm);
  toDo.classList.remove("hidden");
  weather.classList.remove("hidden");
}

loginForm.addEventListener("submit", handleLogIn);

if(localUsername !== null) {
  logedIn(localUsername);
}
