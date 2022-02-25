function fetchDataId(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
    //    .then(data => console.log(data))
}

function userLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(userResponse => userResponse.json())
    .then(transfer => userId(transfer))
}
function userId(transfer){
    const ul = document.getElementById('user-id');
    for(const user of transfer){
        // console.log(user.phone);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name}  Email: ${user.email}`;
        ul.appendChild(li);

    }
}



function postList(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(postRes => postRes.json())
    .then(data => postUser(data));
}

function postUser(data){
    const postId = document.getElementById('post');
    for(const post of data){
        // console.log(post);
        const divId = document.createElement('div');
        divId.innerText = `article name : ${post.title} post body : ${post.body}` ;
        postId.appendChild(divId);
    }
}



