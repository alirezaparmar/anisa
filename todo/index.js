var root = document.querySelector("#root");
var list = document.createElement("ol");
var form = document.createElement("form");
var input = document.createElement("input");
var button = document.createElement("input");
button.type = "submit";
button.value = "Add";

form.appendChild(input);
form.appendChild(button);
form.addEventListener("submit", submitHandler);

root.appendChild(form);
root.appendChild(list);

function getRemoveButton(id) {
  var removeButton = document.createElement("span");
  removeButton.textContent = "x";
  removeButton.style.color = "red";
  removeButton.style.cursor = "pointer";
  removeButton.style.margin = "10px";
  removeButton.addEventListener("click", function (event) {
    event.target.parentElement.remove();
    removeTodo(id);
  });

  return removeButton;
}

function submitHandler(event) {
  event.preventDefault();
  var value = input.value;
  var id = new Date().getTime(); // شناسه یکتا
  addTodoToDOM(id, value);
  saveTodo({
    id: id,
    value: value
  });
}

function addTodoToDOM(id, value) {
  if (value.length < 3) return;
  var li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  input.value = "";

  var removeButton = getRemoveButton(id);

  li.appendChild(removeButton);
}

function saveTodo(todo) {
  var todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
}

function removeTodo(id) {
  var todos = getTodos();
  var newTodos = todos.filter(function (el) {
    return el.id !== id;
  });
  saveTodos(newTodos);
}

var storage = localStorage;

function getTodos() {
  var items = storage.getItem("todos");
  return items ? JSON.parse(items) : [];
}

function saveTodos(todos) {
  storage.setItem("todos", JSON.stringify(todos));
}

(function () {
  getTodos().forEach(function(todo) {
    addTodoToDOM(todo.id, todo.value);
  });
})();
