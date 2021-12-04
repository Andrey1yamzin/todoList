window.addEventListener('DOMContentLoaded', function(){
    let textValue = document.querySelector('.todo-body-input_input');
    let btnAdd = document.querySelector('#add');
    let toDoItems = document.querySelector('.todo-body-items');
btnAdd.addEventListener('click', function(){
        if(textValue.value != ''){
            setItem(); 
        }else{
            alert('Введите заметку!')
        };   
    });
                    function setItem(){
                        let newDiv = document.createElement('div'),
                            newBtnDelet = document.createElement('div'),
                            newInput = document.createElement('input'),
                            newSpan = document.createElement('span');
                            newInput.classList.add('task');
                            newBtnDelet.classList.add('todo-btn-delete');
                            newDiv.classList.add('todo-body-item');
                            newSpan.classList.add('todo-body-span');
                            newInput.type = 'checkbox';
                            newSpan.textContent = textValue.value;
                          toDoItems.appendChild(newDiv);
                          newDiv.appendChild(newBtnDelet);
                          newDiv.appendChild(newInput);
                          newDiv.appendChild(newSpan);  
            textValue.value = '';
            localStorage.setItem('createItem', toDoItems.innerHTML);  
            // local(); 
            newBtnDelet.addEventListener('click', function (){
                toDoItems.removeChild(newDiv);
                localStorage.removeItem('createItem', toDoItems.innerHTML);
                });
            
            newInput.addEventListener('click', function (){
                newSpan.classList.toggle('done');
                newDiv.classList.toggle('item-done');
            });};  
if(localStorage.getItem('createItem')){
    toDoItems.innerHTML = localStorage.getItem('createItem');
}
let toeDel = document.querySelectorAll('.todo-btn-delete');
let toeItem = document.querySelectorAll('.todo-body-item');
let task = document.querySelectorAll('.task');
let span = document.querySelectorAll('.todo-body-span');
function removeContent(e){
    toDoItems.removeChild(toeItem[e]);
    localStorage.removeItem('createItem', toDoItems.innerHTML);
}
toDoItems.addEventListener('click', function(event){
            let target = event.target;
            if(target && target.classList.contains('todo-btn-delete')){
                for(let i = 0; i < toeDel.length; i++){
                    if(target == toeDel[i]){
                        removeContent(i);
                        break;}}
            }else if(target && target.classList.contains('task')){
                    for(let i = 0; i < task.length; i++){
                        if(target == task[i]){
                            span[i].classList.toggle('done');
                            toeItem[i].classList.toggle('item-done');
                        }
                    }
            }

        })
});