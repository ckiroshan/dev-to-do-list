// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault(); // Prevents form submission

  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Todo lI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); // Wraps <li> within <div>

  // Checkmark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // Append to UL list
  todoList.appendChild(todoDiv);
}
