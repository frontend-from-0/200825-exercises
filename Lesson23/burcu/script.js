const newsContainer = document.getElementById("news-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.slice(0, 5).forEach((post) => {
      const newsCard = document.createElement("div");
      newsCard.classList.add("news-style");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const content = document.createElement("p");
      content.textContent = post.body;

      newsCard.appendChild(title);
      newsCard.appendChild(content);
      newsContainer.appendChild(newsCard);
    });
  });
