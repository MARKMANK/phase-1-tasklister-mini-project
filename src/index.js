document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
    form.addEventListener('submit',(event) => {
    event.preventDefault();
    buildToDo(event.target.new_todo.value)
    form.reset()
  })
});

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click'.handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}  `
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(event){
  event.target.parentNode.remove()
}