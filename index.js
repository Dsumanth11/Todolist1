let todoItemsContainer = document.getElementById("todoItemsContainer");
let task_btn = document.getElementById("add_button_task");
let i = 0;
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

function onAddtodDo() {
    let obj = {
        text: document.getElementById("todoUserInput").value,
        uniqueNo: i + 1
    };
    document.getElementById("todoUserInput").value = "";
    todoList.push(obj);
    createAndAppendTodo(obj);
    i++;
}
task_btn.onclick = function() {
    if (document.getElementById("todoUserInput").value === "") {
        alert("Please enter any task name");
        return;
    }
    onAddtodDo();
};

function delelecontainer(uniqueNo) {
    let todoid = "todo" + uniqueNo;
    let todoele = document.getElementById(todoid);
    todoItemsContainer.removeChild(todoele);
}

function todostatuschange(chid, lbid) {
    let labelele = document.getElementById(lbid);
    let checkboxele = document.getElementById(chid);
    labelele.classList.toggle("strike_through");
}

function createAndAppendTodo(todo) {
    let chid = "checkbox" + todo.uniqueNo;
    let lbid = "label" + todo.uniqueNo;
    let todoid = "todo" + todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.setAttribute("id", todoid);
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = chid;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        todostatuschange(chid, lbid);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", chid);
    labelElement.classList.add("checkbox-label");
    labelElement.id = lbid;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick = function() {
        delelecontainer(todo.uniqueNo);
    };
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
    i++;
}