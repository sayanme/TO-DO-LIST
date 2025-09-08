/*function addtask() {
    const newtask = document.createElement("li");
    const tasklist = document.getElementById('Task-list');
    addTaskoption(newtask)
    tasklist.appendChild(newtask);
    newtask.textContent = document.getElementById('task').value;
    document.getElementById('task').value = "";
    deletetask(newtask)
    
}
function deletetask(newtask){

const deletebtn=document.createElement('button');
deletebtn.textContent="Delete"
newtask.appendChild(deletebtn);
deletebtn.onclick =function(){
    newtask.remove()
}}
function addTaskoption(newtask) {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    newtask.appendChild(checkbox);

    checkbox.onchange = function () {
        if (checkbox.checked) {
            newtask.style.textDecoration = "line-through";
        } else {
            newtask.style.textDecoration = "none";
        }
    }
}*/



function addtask() {
    const newtask = document.createElement("li");
    const tasklist = document.getElementById('Task-list');

    // Add checkbox first
    addTaskoption(newtask);

    // Add text inside a span (so checkbox is not removed)
    const taskText = document.createElement("span");
    taskText.textContent = document.getElementById('task').value;
    newtask.appendChild(taskText);

    // Clear input
    document.getElementById('task').value = "";

    // Add delete button
    deletetask(newtask);

    // Append li to ul
    tasklist.appendChild(newtask);
}

function deletetask(newtask) {
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.style.marginLeft = "10px";
    newtask.appendChild(deletebtn);

    deletebtn.onclick = function () {
        newtask.remove();
    }
}

function addTaskoption(newtask) {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    newtask.appendChild(checkbox);

    checkbox.onchange = function () {
        if (checkbox.checked) {
            newtask.style.textDecoration = "line-through";
        } else {
            newtask.style.textDecoration = "none";
        }
    }
}

