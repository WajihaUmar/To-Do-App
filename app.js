var dateTime = new Date()

var date = dateTime.getDate()

var month = dateTime.getMonth()
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var year = dateTime.getFullYear()

var day = dateTime.getDay()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

var dateInput = document.getElementById("date")
dateInput.innerHTML = date

var monthInput = document.getElementById("month")
monthInput.innerHTML = months[month]

var yearInput = document.getElementById("year")
yearInput.innerHTML = year

var dayInput = document.getElementById("day")
dayInput.innerHTML = days[day]

//References
var arr
var inputTask = document.getElementById("inputTask")
var tasksDiv = document.getElementById("todosList")
var start = document.getElementById("starts")
var update_btn = document.getElementById("update-input-btn")
var add_btn = document.getElementById("add-btn")

//add
function addTask() {
  if(inputTask.value != "") {

    var div = document.createElement("div")
    div.className = "task mt-4 py-2 px-3 text-right"

    var p = document.createElement("p")
    p.className = "mb-1 text-left"
    var text = document.createTextNode(inputTask.value)
    p.appendChild(text)

    var icon1 = document.createElement("i")
    icon1.className = "fa fa-pencil update_icon mr-3"
    icon1.setAttribute("onclick", "updateTask(this)")
    var icon2 = document.createElement("i")
    icon2.className = "fa fa-trash-o del_icon"
    icon2.setAttribute("onclick", "deleteTask(this)")

    div.appendChild(p)
    div.appendChild(icon1)
    div.appendChild(icon2)

    tasksDiv.appendChild(div)

    inputTask.value = ""

    if(tasksDiv.firstElementChild.id == "starts") {
      tasksDiv.firstElementChild.remove()
    }
  }
  else {
    alert("Please Enter a Task! ")
    inputTask.focus()
  }
}

//Delete
function deleteTask(e) {
  e.parentNode.remove()
}

//Delete All
function delAll() {
  tasksDiv.innerHTML = ""
  tasksDiv.appendChild(start)
}

//Update
function updateTask(c) {
  add_btn.style.display = "none"
  
  update_btn.style.display = "block"

  var text = c.parentElement.firstChild

  inputTask.value = text.textContent
  inputTask.focus()
  arr = c
}

update_btn.addEventListener("click", function(e) {
  e.preventDefault()
    
  var updated_task = inputTask.value
  if(updated_task != "") {
    arr.parentElement.firstChild.textContent = updated_task
    inputTask.value = ""

    update_btn.style.display = "none"
    add_btn.style.display = "block"
  }
  else {
    alert("Please Enter a Task")
    inputTask.focus()
  }
})