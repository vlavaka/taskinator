var fromEl = document.querySelector("#task-from");
var tasksToDoEl = document.querySelector("tasks-to-do");

formEl.addEventListener("sumbit", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});

var createTaskHandler = function(event) {
    var taskNameInput = document.querySelector("input[name='task-name']");
    console.log(taskNameInput);

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
