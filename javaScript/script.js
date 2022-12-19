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
let decreasebtn = document.getElementsByClassName("less");
let buttons = document.getElementsByClassName("click");
let priority = document.getElementsByClassName("priority");
let color = document.getElementsByClassName("color");

// added color using the bootstrap classes.
function initColor() {
  for (let i = 0; i < color.length; i++) {
    if (tasks[i].importance <= 1) {
      color[i].classList.add(`bg-success`);
    } else if (tasks[i].importance >= 2 && tasks[i].importance <= 3) {
      color[i].classList.add(`bg-warning`);
    } else {
      color[i].classList.add(`bg-danger`);
    }
  }
}

initColor();
addEvent();

function addEvent() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      // we limit the priority level to 5
      if (tasks[i].importance != 5) {
        tasks[i].importance++;
        priority[i].innerHTML = tasks[i].importance;
        initColor();
      }
    };
  }
}

// We add a click event to the "sort button"
document.getElementById("sort").onclick = sort;

function sort() {
  // We sort the tasks by importance-attribute.
  tasks.sort((a, b) => b.importance - a.importance);
  // we empty the browser so the new information doesn´t appear below the one that is already there.
  info.innerHTML = "";
  // we update the information displayed in the browser with the new order.
  updateHtml();
  // apply the coloring condition.
  initColor();
  // text that inform us that the tasks have been sorted.
  document.getElementById(
    "sorted"
  ).innerHTML = `Your tasks have been sorted by priority level!`;
  addEvent();
}
