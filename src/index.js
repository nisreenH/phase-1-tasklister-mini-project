document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  // let form = document.querySelector('form');
  form.addEventListener('submit',(e) =>{
    e.preventDefault()
    AddToDo(e.target.new_task_description.value)
    form.reset()

  })
});

function AddToDo(todo){
  let li = document.createElement('li')
  
  let xbtn = document.createElement('button')
  xbtn.addEventListener('click', handleDelete)
  xbtn.textContent = 'x'

  li.textContent = `${todo}`
  li.appendChild(xbtn)

  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}