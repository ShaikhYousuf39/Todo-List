document.getElementById('addTaskBtn').addEventListener('click', addTask);

document.getElementById('taskInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');

        const taskItem = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
            completeBtn.style.display = 'none';
        });
        taskItem.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}
