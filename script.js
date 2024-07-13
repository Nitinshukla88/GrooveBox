document.addEventListener("click", function (event) {
  // let audio = new Audio("/songs/malhari.mp3");
  // if (data.target.textContent == "Sorry - By Justin Bieber") {
  //   audio.play();
  // }

  let current_playing_song = "";

  let data_recevied = event.target.textContent;
  if(data_recevied == "One call away - By charlie puth"){
    if(current_playing_song==""){
      new Audio("/songs/one call away.mp3").play();
      current_playing_song = "One call away - By charlie puth";
    }else{
      
      Audio.currentTime = 0;
      Audio.pause();
      new Audio("/songs/one call away.mp3").play();
      current_playing_song = "One call away - By charlie puth";
    }
    
  }else if(data_recevied == "Chahun main ya na - Ashiqui 2"){
    new Audio("/songs/chahu mein ya na.mp3").play();
    current_playing_song = "Chahun main ya na - Ashiqui 2";
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
