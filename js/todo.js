const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function printToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDo();
}

function handleToDoAdd(event) {
  event.preventDefault();
  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  toDoInput.value = "";
  printToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoAdd);

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null) {
  toDos = JSON.parse(savedToDo);
  toDos.forEach(printToDo);
}