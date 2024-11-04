document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        const taskList = document.getElementById("taskList");

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskValue;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
