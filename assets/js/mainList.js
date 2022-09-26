 const input = document.querySelector("#input")
  const btnAdd = document.querySelector("#btn_add")
  const totalTareas = document.querySelector("#tot_tareas")
  const totalRealizadas = document.querySelector("#tot_realizadas")
  const listaTareas = document.querySelector("#list")
  const checks = document.querySelector("#status")
  
  const todoList = []
  
    btnAdd.addEventListener("click", () => {
    const nuevaTarea = input.value

    if (nuevaTarea === '') {
          return
        }

    todoList.push({id: Date.now(), nombre: nuevaTarea})
    input.value = ""

    renderTodolist()
  })

  function borrar(id) {
    const index = todoList.findIndex((ele) => ele.id == id)
    todoList.splice(index, 1)
    renderTodolist()
  }  

  function renderTodolist() {
    let html = ""
    for (let tarea of todoList) {
        html += `<li>${tarea.id} ${tarea.nombre} 
        <input type="checkbox" id="status">
        <button onclick="borrar(${tarea.id})"> X </button>
        </li>`
    }

    listaTareas.innerHTML = html;

    const canTareas = todoList.length
    totalTareas.innerHTML = canTareas

    const reaTareas = realizadas.length
    totalRealizadas.innerHTML = reaTareas

    }

function realizadas(checks) {
  checks.forEach((e) =>{
    if(e.checked === true){
      console.log(e.length)
    }
  })
  
}
 realizadas()