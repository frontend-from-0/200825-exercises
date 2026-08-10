fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const postsSection = document.getElementById('posts');

    data.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post-card');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postsSection.appendChild(postElement);
    });
})

.catch(error => {
    console.error('Error occured: ', error);
});