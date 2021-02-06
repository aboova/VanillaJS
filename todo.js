const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "loadedToDo";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id != parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const idLen = toDos.length + 1;
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = " "+text;
    delBtn.innerHTML = "❌"
    li.appendChild(delBtn);
    li.appendChild(span);    
    li.id = idLen;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: idLen
    };
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadedToDo != null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo) { //forEach = list에 있는 모든 item을 위한 함수 실행
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();