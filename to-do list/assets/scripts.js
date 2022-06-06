let count = 0;

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const buttonDeleteTask = document.createElement('button');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', `${description}-${++count}`);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	buttonDeleteTask.type = "button";
    buttonDeleteTask.innerText = "×";
    buttonDeleteTask.classList = "button-delete";

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);
	taskContainer.appendChild(buttonDeleteTask);

	taskList.appendChild(taskContainer);

	buttonDeleteTask.addEventListener('click', () => {deleteTask(taskContainer)});
}

function deleteTask(taskContainer) {
	taskList.removeChild(taskContainer); 
}


