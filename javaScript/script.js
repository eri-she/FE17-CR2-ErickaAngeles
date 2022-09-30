let tasks = JSON.parse(taskList);
console.log(tasks);
let info = document.getElementById("info");

for (let t of tasks) {
  info.innerHTML += `<div class="card ms-2 mt-2" style="width: 18rem;">
  <img src="${t.image}" class="card-img-top" height="200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${t.title}</h5>
    <p class="card-text">${t.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}
