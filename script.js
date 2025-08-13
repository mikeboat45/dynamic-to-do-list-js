document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');

    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');


    const addTask = () => {
        const taskText = taskInput.value.trim()

        if (!taskText) {
            alert('Enter a task here');
        } 

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', () => {
            removeBtn.parentElement.remove();
        });

        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);
        taskInput.value = "";
        
    }

}); 