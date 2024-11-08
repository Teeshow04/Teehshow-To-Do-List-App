
// Select the input field and task list from the DOM
const todoInput = document.getElementById("todo-input");
const taskList = document.querySelector(".task-list");

// Function to add a task
function addTask() {
    if (todoInput.value === "") {
        alert("Please enter your task!");
        return;
    }

    // Create new list item and set its content
    let li = document.createElement("li");
    // li.innerHTML = todoInput.value;

     // Create the "X" button to delete the task
     const textContainer = document.createElement("span");
     li.appendChild(textContainer);
     textContainer.innerHTML = todoInput.value;

     
 
    let span = document.createElement("span")

    // Create the "X" button to delete the task
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "×"; // Using the '×' symbol for the "X" button
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    
    // Add event listener to toggle check/uncheck
    li.addEventListener("click", function () {
        // textContainer.classList.add("delete-btn");
        textContainer.classList.toggle("checked");
    }); 


    // Append the new task to the task list
    taskList.appendChild(li);
    todoInput.value = ""; // Clear the input field
}

// Allow pressing "Enter" to add task
todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
