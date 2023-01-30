$("#BtnMarcar").click(marcar)
function marcar(){
   let tareas = $("[name='todo']")
 for(let i =0;i < tareas.length; i++){
    tareas[i].checked = true
 }
}

$("#BtnBorrar").click(borrar)
function borrar(){
    $("#todoList").html("")
}

$("#BtnCrearTarea").click(crear)
function crear(event){
   event.preventDefault()
   let tarea = $("#todoText").val().trim()
   $("#todoList").append(`<input type="checkbox" name="todo" /> <label>${tarea} </label>  <br>    `)
   $("#todoText").val("")
}

$("#BtnLimpiar").click(limpiar)
function limpiar(){
   let tareas = $("[name='todo']")
   for(let i =0;i < tareas.length; i++){
      tareas[i].checked = false
   }
}