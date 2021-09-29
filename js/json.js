const container = document.getElementById("api-container");
const url = "https://jsonplaceholder.typicode.com/todos/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((todo) => {
      createTask(todo);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

function createTask({ id, title, completed }) {
  const divApi = document.createElement("div");
  divApi.classList.add("api-card");

  if (completed == true) {
    divApi.classList.add("tachado");
  }

  divApi.innerHTML = `
        <h2 class="api-id">${id}</h2>
        <p class="api-title title-task">${title}</p>
    `;
  container.appendChild(divApi);
}




// CHANGE THEME

function handleTheme(e) {
  let themeIcons = document.getElementById('theme-icons');
  if (e.checked) {
      console.log("mudou para dark");
      themeIcons.style.transform = 'rotate(720deg)';
      themeIcons.innerText = 'brightness_5';
      document.documentElement.style.setProperty('--primary-color', '#ffffff');
      document.documentElement.style.setProperty('--background-color', '#222222');
  } else {
      console.log("mudou para light");
      themeIcons.style.transform = '';
      themeIcons.innerText = 'brightness_4'
      document.documentElement.style.setProperty('--primary-color', '#222222');
      document.documentElement.style.setProperty('--background-color', '#ffffff');
  }
}

// SEARCH INPUT
let search = document.getElementById("searchInput");
search.onkeyup = () => {
  let filter = search.value.toUpperCase();
  let p = document.getElementsByTagName("p");

  for (i = 0; i < p.length; i++) {
    txtValue = p[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].parentElement.style.display = "";
    } else {
      p[i].parentElement.style.display = "none";
    }
  }
};

search.addEventListener("click", function (e) {
  document.getElementById("searchInput").classList.add("active");
});

document.addEventListener("click", function (e) {
  if (!e.target.closest("#search")) {
    if (search.value > "") {
      return null;
    } else {
    document.getElementById("searchInput").classList.remove("active");
    }
  }
});


