const container = document.getElementById("api-container");

const url = "https://jsonplaceholder.typicode.com/todos/"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((todo) => {
        createTask(todo)
    });
  })
  .catch(function (error) {
    console.log(error);
  });


function createTask({id, title, completed}) {
    const divApi = document.createElement('div');
    divApi.classList.add('api-card');

    if (completed == true) {
        divApi.classList.add('tachado');
    }

    divApi.innerHTML = `
        <h2 class="api-id">${id}</h2>
        <p class="api-title">${title}</p>
    `
    container.appendChild(divApi);

}