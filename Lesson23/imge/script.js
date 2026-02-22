const postsContainer = document.getElementById("posts");
const statusEl = document.getElementById("status");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    statusEl.textContent = "Posts loaded!";

    posts.forEach((post) => {
      const article = document.createElement("article");
      article.className = "post";

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      article.appendChild(title);
      article.appendChild(body);

      postsContainer.appendChild(article);
    });
  })
  .catch(() => {
    statusEl.textContent = "Error loading posts";
  });
