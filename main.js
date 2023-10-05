//create body node for <body>
const body = document.body
//node for <h1>
const hOne = document.querySelector('#main-heading')

body.style.backgroundColor = 'lightpink'
body.style.color = 'blue'

//button for light/dark mode
const themeButton = document.createElement('button')
themeButton.innerText = 'Dark Mode'
//add button to body
body.appendChild(themeButton)

//addEventListener sets up a function to be called
//background color modifications
themeButton.addEventListener('click', () => {
    if (body.style.backgroundColor === 'black') {
        originalMode()
    } else {
        darkMode()
    }
})

function originalMode() {
    body.style.backgroundColor = 'lightpink'
    body.style.color = 'blue'
    themeButton.innerText = 'Dark Mode'
}

function darkMode() {
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    themeButton.innerText = 'Original Mode'
}

const main = document.getElementsByTagName('main')[0]
main.style.display = 'flex'
main.style.gap = '10px'

//create variables for taskList and taskForm
const taskList = document.getElementById('task_list')
const taskForm = document.querySelector('#task_form')

//function for adding tasks, description, date/overdue, and delete button for each task
function addTask(itemName, description, date) {
    const taskContainer = document.createElement('div')
    const taskName = document.createElement('h3')
    const taskDesc = document.createElement('p')
    const task = {name: itemName, description: description, date: date}
    const delButton = document.createElement('button')

    taskName.innerText = itemName
    taskDesc.innerText = description
    delButton.innerText = 'Delete'

    taskContainer.appendChild(taskName)
    taskContainer.appendChild(taskDesc)
    taskContainer.appendChild(delButton)
    
    const taskDate = new Date()
    const taskDue = new Date(date)
    if (taskDue < taskDate) {
        taskContainer.style.color = 'red'
    }

    taskList.appendChild(taskContainer)

    taskContainer.addEventListener('click', () => {
        taskContainer.remove()
    })
    return taskContainer
}

//also added conditional to not add tasks that are empty strings
taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskName = document.querySelector('#task-field').value
    const taskDesc = ''
    const taskDate = document.querySelector('#due-date-field').value
    if (taskName.trim() !== '') {
        addTask(taskName, taskDesc, taskDate)
        document.querySelector('#task-field').value = ''
        document.querySelector('#due-date-field').value = ''
    }
})





