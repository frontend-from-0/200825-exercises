const container = document.getElementById("posts-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      postDiv.appendChild(title);
      postDiv.appendChild(body);

      container.appendChild(postDiv);
    });
  });
