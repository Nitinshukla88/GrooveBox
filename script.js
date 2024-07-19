let isappended_newdiv = false;
let is_playing_song = false;
let curr_music_path = "";

document.addEventListener("click", function (event) {
  

  let data_recevied = event.target.textContent;
  
  if(isappended_newdiv == true){
    let ele = document.querySelector('.current-song');
    console.log(ele);
    ele.innerHTML = data_recevied;
  }else{
    let newdiv = document.createElement('div');
    newdiv.classList.add("current-song");
    newdiv.innerHTML = data_recevied;
    const parentdiv = document.querySelector('.footer-main');
    parentdiv.appendChild(newdiv);
    isappended_newdiv = true;
  }

  if(data_recevied == "One call away - By charlie puth"){
    if(is_playing_song == false){
      new Audio("/songs/one call away.mp3").play();
      is_playing_song = true;
    }else{
      
      // new Audio(curr_music_path).currentTime = 0;
      new Audio(curr_music_path).pause();
      new Audio("/songs/one call away.mp3").play();
      current_playing_song = true;
      curr_music_path = "/songs/one call away.mp3";
    }
    
  }else if(data_recevied == "Chahun main ya na - Ashiqui 2"){
    if(is_playing_song == true){
      // new Audio(curr_music_path).currentTime = 0;
      new Audio(curr_music_path).pause();
      new Audio("/songs/chahu mein ya na.mp3").play();
      curr_music_path = "/songs/chahu mein ya na.mp3";
    }
    new Audio("/songs/chahu mein ya na.mp3").play();
    is_playing_song = true;
    curr_music_path = "/songs/chahu mein ya na.mp3";
  }else if(data_recevied == "Mercy - By Badshah"){
    new Audio("/songs/mercy.mp3").play();
  }else if(data_recevied == "Malhari - Bajirao Mastani"){
    new Audio("/songs/malhari.mp3").play();
  }else if(data_recevied == "Act my age - By One direction"){
    new Audio("/songs/act my age.mp3").play();
  }else if(data_recevied == "Pi jaun - Farhan Saeed"){
    new Audio("/songs/pi jaun.mp3").play();
  }
});
