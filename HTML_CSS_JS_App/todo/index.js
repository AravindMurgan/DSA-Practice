let container = document.getElementById('container');
let inputField = document.getElementById('input__field');
let button = document.getElementById('btn');
let todoList = document.getElementById('todo__list');

button.addEventListener('click', function btnFunc(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('todo__items');
    paragraph.innerText = inputField.value;
    todoList.appendChild(paragraph)
    inputField.value=''
    paragraph.addEventListener('click',function(){
      paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
      todoList.removeChild(paragraph)
    })
})