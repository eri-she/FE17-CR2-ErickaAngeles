let tasks = JSON.parse(taskList);
console.log(tasks);
let info = document.getElementById("info");

function updateHtml() {
  for (let t of tasks) {
    info.innerHTML += `<div class="card ms-2 mt-2" style="width: 18rem;">
  <img src="${t.image}" class="card-img-top" height="200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${t.title}</h5>
    <p class="card-text">${t.description}</p>
    <p class="card-text color">⚠︎ Priority level:<span class="priority">  ${t.importance}</span></p>
    <button href="#" class="btn btn-primary click">Priority</button>
  </div>
</div>`;
  }
}
updateHtml();

let buttons = document.getElementsByClassName("click");
let priority = document.getElementsByClassName("priority");
let color = document.getElementsByClassName("color");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    if (tasks[i].importance != 5) {
      tasks[i].importance++;
      priority[i].innerHTML = tasks[i].importance;
      colors(i);
    }
  };
}
function colors(i) {
  if (tasks[i].importance <= 1) {
    color[i].classList.add(`bg-success`);
  } else if (tasks[i].importance >= 2 && tasks[i].importance <= 3) {
    color[i].classList.add(`bg-warning`);
  } else {
    color[i].classList.add(`bg-danger`);
  }
}

document.getElementById("sort").onclick = sort;

function sort() {
  tasks.sort((a, b) => b.importance - a.importance);

  info.innerHTML = "";
  updateHtml();
  document.getElementById(
    "sorted"
  ).innerHTML = `Your tasks have been sorted by priority level!`;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      if (tasks[i].importance != 5) {
        tasks[i].importance++;
        priority[i].innerHTML = tasks[i].importance;
        colors(i);
      }
    };
  }
}
