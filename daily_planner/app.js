// UI-variables
const form = document.querySelector('.form');
const addBtn = document.getElementById('add-task-icon');
const cancelBtn = document.querySelector('.cancel');
const taskInput = document.querySelector('.task-name');
const descriptionInput = document.querySelector('.description-name');
const timeInput = document.querySelector('.time-name');
const selectInput = document.querySelector('.select');
const addTaskBtn = document.querySelector('.add-task');
const showcase = document.querySelector('#showcase');
const prioritySection = document.querySelector('#priority-section');
const filter = document.getElementById('filter');
const showDate = document.querySelector('.date');


// showDate
let now = new Date().toLocaleDateString('en-us', {weekday:"long", month:"long", day:"numeric"});

showDate.textContent = now;


// load-all-event-listerners
loadEventListeners();

function loadEventListeners(){
    // display-add-task-form-event
    addBtn.addEventListener('click', showForm);

    // close-add-task-form-event
    cancelBtn.addEventListener('click', closeForm);

    // add-task-event
    form.addEventListener('submit', addTask);

    // enable-button-event
    taskInput.addEventListener('input', enableButton);

    // remove-task-event
    showcase.addEventListener('click', removeTask);

    // filter-tasks
    filter.addEventListener('keyup', filterTasks);
}


// enable-button
function enableButton(){
    if(taskInput.value != ''){

            addTaskBtn.disabled = false;
            addTaskBtn.style.background = '#e0247c';
            addTaskBtn.style.cursor = 'pointer';
    
    }else{

            addTaskBtn.disabled = true;
            addTaskBtn.style.background = '#f5a3c9';
            addTaskBtn.style.cursor = 'cursor';
    }
}


// display-add-task-form
function showForm(e){

    document.getElementById('task-form-area').style.display = 'block';

    document.getElementById('add-task-icon').style.display = 'none';

    e.preventDefault();
}

// close-form-area
function closeForm(e){

    document.getElementById('task-form-area').style.display = 'none';

    document.getElementById('add-task-icon').style.display = 'flex';

    e.preventDefault();
}

// add-task
function addTask(e){
    if(taskInput.value === ''){

        alert('fill the task filed');

    }else{

        // create-parent-div
        const taskArea = document.createElement('div');

        // add-id
        taskArea.setAttribute('id', 'task-area');

        // create-container-div
        const taskCont = document.createElement('div');

        // add-class
        taskCont.className = 'task-area-container';

        // append-congtainer-to-parent
        taskArea.appendChild(taskCont);

        // create-priority-div
        const priorityHome = document.createElement('div');

        // add-id
        priorityHome.setAttribute('id', 'priority-section');

        //add-icon
        priorityHome.innerHTML = '<i class="fa-regular fa-circle"></i>';

        // append-priority-to-container
        taskCont.appendChild(priorityHome);

        // create-details-div
        const detailsHome = document.createElement('div');

        // add-id
        detailsHome.setAttribute('id', 'task-details');

        // append-details-to-container
        taskCont.appendChild(detailsHome);

        // create-h3-element
        const h3 = document.createElement('h3');

        // add-class
        h3.className = 'task';

        // create-text-node-and-append-to-h3
        h3.appendChild(document.createTextNode(taskInput.value));

        // append-to-div
        detailsHome.appendChild(h3);

        
        // create-p-element
        const desc = document.createElement('p');

        // add-class
        desc.className = 'description';

        // create-text-node-and-append-to-desc
        desc.appendChild(document.createTextNode(descriptionInput.value));

        // append-to-div
        detailsHome.appendChild(desc);

        
        // create-p-element
        const saa = document.createElement('p');

        // add-class
        saa.className = 'time';

        // create-text-node-and-append-to-saa
        saa.appendChild(document.createTextNode(timeInput.value));

        // append-to-div
        detailsHome.appendChild(saa);

        // append-to-main
        showcase.appendChild(taskArea);

        // clear-inputs
        taskInput.value = '';
        descriptionInput.value = '';
        timeInput.value = '';
        selectInput.value = '';
        
        addTaskBtn.disabled = true;
        addTaskBtn.style.background = '#f5a3c9';
        addTaskBtn.style.cursor = 'cursor';

    // console.log(taskArea);
    // console.log(selectInput.value);

    e.preventDefault();

    }
    
}

// remove-task
function removeTask(e){
    // alert('delete')

    if(e.target.classList.contains('fa-circle')){
        // console.log(e.target);
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.parentElement.remove();
        }
    }

    e.preventDefault()
}

// filter-tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('#task-area').forEach(function(ite){
        const item = ite.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            ite.style.display = 'flex';
        }else{
            ite.style.display = 'none';
        }
    });

    // console.log(text);
    e.preventDefault();
}





