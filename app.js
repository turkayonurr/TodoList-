let todoContainer = document.getElementById('toDoContainer');
let clearTodo = document.getElementById('clearToDo');
let addTodo = document.getElementById('addToDo');
let inputText = document.getElementById('inputText');

addTodo.addEventListener('click', function (){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
    
    clearTodo.addEventListener('click', function () {
        paragraph.remove();
    });

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function () {
        todoContainer.removeChild(paragraph);
    })
})