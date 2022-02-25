function albumId(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(albumRes=> albumRes.json())
    .then(data => albumPost(data));

}
albumId();

function albumPost(albums){
    const albumShow = document.getElementById('album-json');
    for(const album of albums){
    const albumId = document.createElement('div');
    albumId.style.textAlign = 'center';
    albumId.innerHTML = ` id : ${album.id},title : ${album.title}`;
    albumId.classList.add('album-style');
    albumShow.appendChild(albumId);
    }
    

    
}