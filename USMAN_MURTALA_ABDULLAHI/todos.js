let addtoDoButton = document.getElementById("addTodo")
let toDoContainer = document.getElementById("todoContainer")
let inputField = document.getElementById("inputField")

addtoDoButton.addEventListener("click", function(){
    let paraghraph = document.createElement('p')
    paraghraph.classList.add('paragraph-styling')
    paraghraph.innerText= inputField.value
    toDoContainer.appendChild(paraghraph)
    inputField.value = ''
    paraghraph.addEventListener('click', function(){
        paraghraph.style.textDecoration = "line-through"
    })
    paraghraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paraghraph)
    })
})