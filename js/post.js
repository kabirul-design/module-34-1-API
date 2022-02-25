function dataLoad(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => dataUserPost(data))
}
dataLoad();
function dataUserPost(posts){
    const showPost = document.getElementById('post-show');
    for(const post of posts){
        const postId = document.createElement('div');
        postId.classList.add('post');
        postId.classList.add('post-title');
        postId.innerHTML = `<h3>${post.title}</h3> <p>${post.body}</p>`;
        showPost.appendChild(postId);
        
    }
}

function methodAdd(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body: JSON.stringify({
            title : 'my Name is ',
            body : 'hello World',
            userId : 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}