let tasks = JSON.parse(taskList);
console.log(tasks);
let info = document.getElementById("info");

for (let t of tasks) {
  info.innerHTML += `<div class="card ms-2 mt-2" style="width: 18rem;">
  <img src="${t.image}" class="card-img-top" height="200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${t.title}</h5>
    <p class="card-text">${t.description}</p>
    <p class="card-text ">⚠︎ Priority level:<span class="priority">  ${t.importance}</span></p>
    <button href="#" class="btn btn-primary">Priority</button>
  </div>
</div>`;
}

let buttons = document.getElementsByClassName("btn");
let priority = document.getElementsByClassName("priority");
console.log(priority);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    tasks[i].importance++;
    document.getElementsByClassName("priority")[i].innerHTML =
      tasks[i].importance;
  };
}
