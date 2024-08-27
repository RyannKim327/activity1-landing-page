const access = (file) => {
  const obj = document.getElementById("page");

  const title = document.getElementById("title");
  const header_title = document.getElementById("header-title");
  switch (file) {
    case "main":
      title.textContent = "Homepage";
      header_title.textContent = "Homepage";
      break;
    case "about":
      title.textContent = "About us";
      header_title.textContent = "About us";
      document.head.title = "About us";
      break;
  }

  obj.data = `pages/${file}.html`;
};

const urlExtractor = (entity) => {
  const regex = new RegExp("page=([\\w]+)", "gi");
  if (regex.test(entity)) {
    let url = entity.match(regex)[0];
    url = url.replace(/page=/gi, "");
    access(url);
    return;
  }
  access("main");
};

const addNavigations = () => {
  const ul = document.getElementById("lists");
  const header_ul = document.getElementById("header-ul");
  const urls = [
    {
      name: "Home",
      url: "main",
    },
    {
      name: "About",
      url: "about",
    },
  ];
  urls.map((data) => {
    const li = document.createElement("li");
    li.textContent = data.name;
    li.onclick = () => {
      location.href = `?page=${data.url}`;
    };
    ul.appendChild(li);
  });
  urls.map((data) => {
    const li = document.createElement("li");
    li.textContent = data.name;
    li.onclick = () => {
      location.href = `?page=${data.url}`;
    };
    header_ul.appendChild(li);
  });
};

window.onload = () => {
  // INFO: A function where everything starts after a load
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 150);
  addNavigations();
};

// TODO: No load access
urlExtractor(location.href);
