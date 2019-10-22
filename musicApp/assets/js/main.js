$(document).ready(function(){
    songoperation.ajaxcall();
    console.log("its work");    
})


function printSongs(songsArray){
    console.log(songsArray.length);
    for(let i=0;i<songsArray.length;i++){
        console.log(songsArray[i].song_name);
        var ul = document.querySelector("#songsList");
        console.log("its also work");
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("btn");
        btn.className = 'w-100 btn btn-primary';
        btn.innerHTML = "Add to Playlist";
        span.innerHTML = songsArray[i].song_name;
        img.setAttribute("src", songsArray[i].song_thumb);
        span.setAttribute("title", songsArray[i].song_id);
        img.setAttribute("title", songsArray[i].song_id);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        // span.addEventListener("click", playSong);
        // img.addEventListener("click", playSong);
        // btn.addEventListener("click", addToPlayList);
    }
}


// function playsong(){
//     var song_id = event.srcElement.title;
//     var song_url;
//     var song_thumb;
//     for (var i = 0; i < songsArray.length; i++) {
//         if (songsArray[i].song_id == song_id) {
//             song_url = songsArray[i].song_url;
//             song_thumb = songsArray[i].song_thumb;
//         }
//     }
//     audio.src = song_url;
//     audio.play();
//     document.querySelector("#song_thumb").src = song_thumb;
// }
// function addToPlayList(params) {
    
// }