document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector("#create-task-form"); // getting the <form> by Id
  const newLable = document.querySelector("#new-task-description"); //  getting the <label> by Id
  const newInput = document.querySelector("#new-task-priority"); // getting the <input> by Id
  const newUl = document.querySelector("#tasks"); // getting the <ul> by Id
  newForm.addEventListener("submit", createNewTask); // adding an event listener to the form
});

const createNewTask = event => {
  event.preventDefault();
  const newLable = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newLable.value;
  appendNewTask(newTask);
  event.target.reset();
};
const appendNewTask = task => {
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x ' // this button will be inside the <li> as a child
  task.appendChild(btn)
  console.log(task)
  document.querySelector("#tasks").appendChild(task);
};

function handleDelete(e){ // so that we can remove the list 
  e.target.parentNode.remove()
}



