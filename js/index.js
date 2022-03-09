const div_search = document.getElementById('search');
const input_addTask = document.getElementById('addTaskInput');
const addForm = document.getElementById('addForm');
const section_Addtask = document.getElementById('sectionAddTodo');
const date = new Date();
const todos = [];
let idGlobal = 1;

// ADD NOTE TO ARRAY
function addTodotoArray(obj) {
    obj.id = idGlobal;
    todos.push(obj);
    createTask(obj, idGlobal++);
}

// CREATE NOTE
function createTask(obj, id) {
    const div_task = document.createElement('div');
    div_task.classList.add('task');
    if (obj.completed == true) {
        div_task.classList.add('tachado');
    }

    div_task.innerHTML = `
        <input class="check" type="checkbox">
        <p class="title-task">${obj.title}</p>
        <div class="options">
            <span class="id-task">id: ${id}</span>
            <span class="task-color green" title="green"></span>
            <span class="task-color blue" title="blue"></span>
            <span class="task-color red" title="red"></span>
            <span class="task-color clear" title=""></span>
           
            <button class="delete-button" data-idTask="${id}">
                <i class="fas fa-trash-alt"></i>
            </button>
            <div class="modal-delete-todo">
            <div class="container-sim-nao">
                <div>
                    <button id="sim-delete" class="sim-delete" type="button" >Excluir</button>
                    <button class="nao-delete" type="button">Cancelar</button>
                </div> 
            </div>
        </div>`

    document.getElementById('todoContainer').appendChild(div_task);
    removeTask();
    handleCardColor();
}

// REMOVE TO-DO
function removeTask() {
    let simDelete = document.querySelectorAll('.sim-delete');
    let task = document.querySelectorAll('.task');
    let naoDelete = document.querySelectorAll('.nao-delete');
    let deleteModal = document.querySelectorAll('.modal-delete-todo');
    let deleteButton = document.querySelectorAll('.delete-button');
    for(let i=0; i < task.length; i++ ){
        simDelete[i].addEventListener('click', () => {
            task[i].style.opacity= 0;
            task[i].style.transform= "translateX(100%)";
            task[i].addEventListener('transitionend', () => {
                task[i].remove();
            })
        })
        naoDelete[i].addEventListener('click', () => {
            deleteModal[i].style.display = "none";        
        })
        deleteButton[i].addEventListener('click', () => {
            deleteModal[i].style.display = "flex";           
        })
    }
}
removeTask();

// INPUTS VALIDATION
input_addTask.onfocus = () => {
    document.getElementById('extras').classList.add('active');
    input_addTask.style.boxShadow = "";
    input_addTask.placeholder = "Adicionar nota"
}

function validarInputs(input) {
    if (input.value.trim() == '') {
        input_addTask.style.boxShadow = "0 0 0 1px #ff0000";
        input_addTask.placeholder = " <<< Preenchimento obrigatório >>> "
        return false;
    } else {
        input_addTask.style.boxShadow = "";
        input_addTask.placeholder = "Adicionar nota"
    }
    return true;
}


addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputsValido = Array.from(addForm.querySelectorAll('input, textarea')).every(input => validarInputs(input));
    if (inputsValido) {
        const form = e.target;
        const formData = new FormData(form);
        const obj = {};
        formData.forEach((value, key) => obj[key] = value);
        addTodotoArray(obj);
        document.getElementById('extras').classList.remove('active');
        form.reset();
        input_addTask.blur();
        input_addTask.focus();
        window.scrollTo(0, document.body.scrollHeight);
    }
});

// GLOBAL EVENT LISTENERS
document.addEventListener('click', function (e) {
    if (!e.target.closest('#sectionAddTodo') && !e.target.closest('h1')) {
        document.getElementById('extras').classList.remove('active');
        input_addTask.rows = 1;
    }

    if (!e.target.closest("#search")) {
        if (search.value > "") {
          return null;
        } else {
        document.getElementById("searchInput").classList.remove("active");
        }
      }

    if (!e.target.closest("#categories-container") && !e.target.closest(".filter-btn") && !e.target.closest('#switch-theme')) {
        document.getElementById('categories-container').style.transform = 'translateX(100%)';
        document.getElementById('categories-container').style.opacity = 0;
        setTimeout(() => document.getElementById('categories-container').style.display = 'none',500)
    }
});

div_search.addEventListener('click', function () {
    document.getElementById('searchInput').classList.add('active');
});

input_addTask.addEventListener('focus', function () {
    document.getElementById('extras').classList.add('active');
    document.getElementById('data').value = date.toLocaleDateString();
});

// PRESS ENTER / SUBMIT FORM
const textarea = document.getElementById("addTaskInput")
textarea.onkeydown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        e = new FormData(addForm);
        const inputsValido = Array.from(addForm.querySelectorAll('input, textarea')).every(input => validarInputs(input));

        if (inputsValido) {
            const formData = new FormData(addForm);
            const obj = {};
            formData.forEach((value, key) => obj[key] = value);
            addTodotoArray(obj);
            document.getElementById('extras').classList.remove('active');
            addForm.reset();
            input_addTask.blur();
            input_addTask.focus();
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
};

const resizeTaskBox = () => {
    let task = document.querySelectorAll('.task');
    let titleTask = document.querySelectorAll('.title-task');
    for (let i = 0; i < task.length; i++) {
        task[i].style.width = titleTask[i].offsetWidth +'px'
    }
}

// ZEN MODE CLICK / SCROLLING DOWN TO INPUT
document.querySelector("h1").onclick = () => {
    input_addTask.focus();
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('extras').classList.add('active');
}

// STARTING APP FOCUSING ON INPUT AND SHOWING RECENT NOTES
window.onload = () => {
    input_addTask.focus();
    window.scrollTo(0, document.body.scrollHeight);
}

// OPEN/CLOSE CATEGORIES LIST
document.querySelector('.filter-btn').onclick = () => {
    document.getElementById('categories-container').style.transform = 'translateX(0%)';
    document.getElementById('categories-container').style.opacity = 1;
    document.getElementById('categories-container').style.display = '';
}
document.getElementById('close-categories').onclick = () => {
    document.getElementById('categories-container').style.transform = 'translateX(100%)';
    document.getElementById('categories-container').style.opacity = 0;
    setTimeout(() => document.getElementById('categories-container').style.display = 'none',500)  
}

// CHANGE THEME
function handleTheme(e) {
    let themeIcons = document.getElementById('theme-icons');
    if (e.checked) {
        console.log("mudou para dark");
        themeIcons.style.transform = 'rotate(720deg)';
        themeIcons.innerText = 'brightness_5';
        document.documentElement.style.setProperty('--primary-color', '#ffffff');
        document.documentElement.style.setProperty('--background-color', '#222222');
    } else {
        console.log("mudou para light");
        themeIcons.style.transform = '';
        themeIcons.innerText = 'brightness_4'
        document.documentElement.style.setProperty('--primary-color', '#222222');
        document.documentElement.style.setProperty('--background-color', '#ffffff');
    }
}

// SEARCH INPUT
let search = document.getElementById("searchInput");
search.onkeyup = () => {
    let filter = search.value.toUpperCase();
    let p = document.getElementsByTagName("p");

    for (i = 0; i < p.length; i++) {
        txtValue = p[i].textContent;
        if (txtValue.trim().toUpperCase().indexOf(filter) > 0) {
            p[i].parentElement.style.display = "";
        } else {
            p[i].parentElement.style.display = "none";
        }
    }
};

// SELECT NOTE COLORS
function handleCardColor() {
    const colors = document.querySelectorAll(".task-color");
    colors.forEach(color => color.onclick = () => {
        color.parentElement.parentElement.style.color = `${color.title}`; })
};
handleCardColor();

