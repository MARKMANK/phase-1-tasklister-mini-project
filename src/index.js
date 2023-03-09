document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
    form.addEventListener('submit',(event) => {
    event.preventDefault();
    buildToDo(event.target.newtaskdescription.value)
    form.reset()
  })
});

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todo}  `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(event){
  event.target.parentNode.remove()
  alert("You did a thing!")
}