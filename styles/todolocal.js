const form = document.getElementById("newForm");
const taskList = document.getElementById("taskList");
//i need to get data from local storage
const savedTodos = JSON.parse(localStorage.getItem('task'));
for(let todo in savedTodos) {
    const newLi = document.createElement("li");
    newLi.innerText = `todoList${todo}.task`;
    newLi.isCompleted= `savedTodos ${todo}.isCompleted ? true :false`;
    
}
//need to save it to local storage
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let newLi = document.createElement("li");
    let newTask = document.getElementById("task").value;
    newLi.innerText = newTask;
    newLi.isCompleted = false;
   form.reset();
    taskList.appendChild(newLi);

savedTodos.push({ task: newLi.innerText, isCompleted: false });
localStorage.setItem('todos',JSON.stringify(task))
});

taskList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }
});
