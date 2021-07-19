let tareas = [];

function agregarTarea(tarea) {
  tareas.push(tarea.value)
  
  localStorage.setItem("tareasVarias", JSON.stringify(tareas))
  tarea.value = ""
}

function mostrarTarea() {
  let lista = document.getElementById("lista")

  let tareasAgregadas = JSON.parse(localStorage.getItem("tareasVarias"))

  tareasAgregadas.map(tar => {
    let li = document.createElement('li')
    li.innerText = tar
    lista.appendChild(li)
  })
}