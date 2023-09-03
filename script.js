let input_text = document.getElementById("input_text");
let add = document.getElementById("add_btn");
let pending_container = document.getElementById("pending_task_container");
let completed_container = document.getElementById("completed_container");
let message_user_completed = document.getElementById("message_complated");


function completed_todo(task) {
    let list_item = document.createElement("li");
    list_item.classList.add("todo-item-container", "d-flex", "flex-row");
    completed_container.appendChild(list_item);

    let button_tick = document.createElement("button");
    button_tick.classList.add("checkbox-input2", "mr-2");
    button_tick.textContent = "@";
    button_tick.id = "checkboxinput"
    list_item.appendChild(button_tick);

    let container_list = document.createElement("div");
    container_list.classList.add("label-container", "d-flex", "flex-row");
    list_item.appendChild(container_list);


    let label = document.createElement("label");
    label.classList.add("checkbox-label");
    label.setAttribute("for", "checkboxinput");
    label.style.textDecoration = "line-through";
    label.textContent = task;
    container_list.appendChild(label);

    let container_delete = document.createElement("div");
    container_list.appendChild(container_delete);

    let icon2 = document.createElement("i");
    icon2.classList.add("far", "fa-trash-alt", "delete-icon");
    container_delete.appendChild(icon2);

    icon2.onclick = function() {
        completed_container.removeChild(list_item);
    }
}


add.onclick = function() {
    let inputValue = input_text.value;
    let task = inputValue;
    if (task === "") {
        alert("Please Enter a task . . . !")
        return
    }
    let count = 0
    let list_item = document.createElement("li");
    list_item.classList.add("todo-item-container", "d-flex", "flex-row");
    pending_container.appendChild(list_item);

    let button_tick = document.createElement("button");
    button_tick.classList.add("checkbox-input", "mr-2");
    button_tick.textContent = "*";
    button_tick.id = "checkboxinput"
    list_item.appendChild(button_tick);

    let container_list = document.createElement("div");
    container_list.classList.add("label-container", "d-flex", "flex-row");
    list_item.appendChild(container_list);

    let label = document.createElement("label");
    label.classList.add("checkbox-label");
    label.setAttribute("for", "checkboxinput");
    label.textContent = task;
    container_list.appendChild(label);

    button_tick.onclick = function() {
        let completed_message = "Congrats you have completed the " + task+". . .";
        message_user_completed.textContent = completed_message;
        setTimeout(function() {
            message_user_completed.textContent = "";
        }, 2000)

        label.style.textDecoration = "line-through";
        pending_container.removeChild(list_item)
        completed_todo(task)
    }

    let container_delete = document.createElement("div");
    container_list.appendChild(container_delete);

    let icon2 = document.createElement("i");
    icon2.classList.add("far", "fa-trash-alt", "delete-icon");
    container_delete.appendChild(icon2);

    icon2.onclick = function() {
        pending_container.removeChild(list_item)
    }
    input_text.value = ""
}
message_user_completed.textContent="Hello.....Enter your 1st task";
setTimeout(function(){
    message_user_completed.textContent="";
},2000);