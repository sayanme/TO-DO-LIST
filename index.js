function addtask() {
    const newtask = document.createElement("li");
    const tasklist = document.getElementById('Task-list');
    addTaskoption(newtask);
    const taskText = document.createElement("span");
    taskText.textContent = document.getElementById('task').value;
    newtask.appendChild(taskText);
    document.getElementById('task').value = "";
    deletetask(newtask);
    tasklist.appendChild(newtask);
    editTask(newtask)
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
function editTask(newtask){
    const editbtn = document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.style.margin = "2px";
    newtask.appendChild(editbtn)
    editbtn.onclick = function(){
        editTask.tasktext;
    }
}



