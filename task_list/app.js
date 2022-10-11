// define-ui-vars
const form = document.querySelector('#form-input');
const taskInput = document.querySelector('.name');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('.filter');
const small = document.querySelector('.small');

// load-all-event-listeners
loadEventListeners();

function loadEventListeners(){

    // DOM-load-event
    document.addEventListener('DOMContentLoaded', getTasks);

    // add-task-event
    form.addEventListener('submit', addTask);

    // remove-task-event
    taskList.addEventListener('click', removeTask);

    // clear-task-event
    clearBtn.addEventListener('click', clearTasks);

    // filter-tasks
    filter.addEventListener('keyup', filterTasks);
}

// get-tasks-from-local-storage
function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create-li-element
        const li = document.createElement('li');

        // add-class
        li.className = 'collection-items';

        // create-text-node-and-append-to-li
        li.appendChild(document.createTextNode(task));

        // create-delete-link-element
        const link = document.createElement('a');

        // add-class
        link.className = 'delete-item';

        // add-icon-html
        link.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        // append-the-link-to-li
        li.appendChild(link);

        // append-link-to-ul
        taskList.appendChild(li);
    });
}

// add-task
// add-task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
        // // customized-alert
        // // add-class
        // small.className = 'alert';

        // // create-text-node-and-append-to-small
        // small.appendChild(document.createTextNode('Add a Task'));

    }else{
        // create-li-element
        const li = document.createElement('li');

        // add-class
        li.className = 'collection-items';

        // create-text-node-and-append-to-li
        li.appendChild(document.createTextNode(taskInput.value));

        // create-delete-link-element
        const link = document.createElement('a');

        // add-class
        link.className = 'delete-item';

        // add-icon-html
        link.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        // append-the-link-to-li
        li.appendChild(link);

        // append-link-to-ul
        taskList.appendChild(li);

        // store-in-local-storage
        storeTaskInLocalStorage(taskInput.value);

        // clear-input
        taskInput.value = '';
    }

    e.preventDefault();
}

// store-task
// store-task
function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove-task
// remove-task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log(e.target);
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();

            // remove-from-local-storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

    e.preventDefault();

}

// remove-task-from-local-storage
// remove-task-from-local-storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear-tasks
// clear-tasks
function clearTasks(){
    //method-1
    if(confirm('Do you want to clear everything?')){
        taskList.innerHTML = '';
    }

    // method-2 (fastest)
    // while(taskList.firstChild){
    //     taskList.removeChild(taskList.firstChild);
    // }
    // clear-from-localstorage
    clearTasksFromLocalStorage();
}

// clear-tasks-from-local-storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// filter-tasks
// filter-tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-items').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'flex';
        }else{
            task.style.display = 'none';
        }
    });

    // console.log(text);
    e.preventDefault();
}