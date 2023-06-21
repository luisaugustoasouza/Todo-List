const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    //Criar a tag li
    const li = document.createElement("li");
    li.classList.add("task");

    //Criar a tag span
    const span = document.createElement("span");
    span.classList.add("task__task-description");
    span.textContent = taskText;

    //Adicionar span dentro da li
    li.appendChild(span);

    //Criar a tag button e a tag i
    const removebutton = document.createElement("button");
    const i = document.createElement("i");
    removebutton.classList.add("task__complete-task-button");
    i.classList.add("ri-checkbox-line", "task__complete-task-icon");

    //Adicionar i em button > button na li > li na ul
    removebutton.appendChild(i);
    li.appendChild(removebutton);
    taskList.appendChild(li);

    //Deixando input em branco
    taskInput.value = ""

    //Função de exclusao no botão de concluir
    removebutton.addEventListener('click', function() {
      li.remove()
    })
  }
});
