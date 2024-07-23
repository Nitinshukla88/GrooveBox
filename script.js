let is_playing_song = false;
let curr_audio = "";
let selected_user_song = "";
let is_newsong_selected = false;

let seek = document.getElementById("seeker");

seek.addEventListener("change", function () {
  const clickpoint = seek.value / 100;
  curr_audio.currentTime = (curr_audio.duration || 0) * clickpoint;
});

function range_slider(music) {
  music.addEventListener("timeupdate", () => {
    seeker.value = (music.currentTime / music.duration) * 100;
    if (seeker.value == 100) {
      seeker.value = 0;
      let div_to_be_remove = document.querySelector(".current-song");
      div_to_be_remove.remove();
      is_playing_song = false;
    }
  });
}

const play_pause_element = document.querySelector(".playbtn");

play_pause_element.addEventListener("click", function () {
  if (is_playing_song == true) {
    curr_audio.pause();
    play_pause_element.classList.remove("fa-circle-pause");
    play_pause_element.classList.add("fa-circle-play");
    is_playing_song = false;
  } else {
    selected_user_song.play();
    play_pause_element.classList.remove("fa-circle-play");
    play_pause_element.classList.add("fa-circle-pause");
    range_slider(selected_user_song);
    is_playing_song = true;
  }
});

const song1 = new Audio("/songs/one call away.mp3");
const song2 = new Audio("/songs/chahu mein ya na.mp3");
const song3 = new Audio("/songs/mercy.mp3");
const song4 = new Audio("/songs/malhari.mp3");
const song5 = new Audio("/songs/act my age.mp3");
const song6 = new Audio("/songs/pi jaun.mp3");

let song_elements = document.querySelectorAll(".songs");
for (i = 0; i < song_elements.length; i++) {
  song_elements[i].addEventListener("click", function (event) {
    let data_recevied = event.target.textContent;
    if (is_newsong_selected == true) {
      let ele = document.querySelector(".current-song");
      ele.innerHTML = data_recevied;
      curr_audio.pause();
      curr_audio.currentTime = 0;
      play_pause_element.classList.remove("fa-circle-pause");
      play_pause_element.classList.add("fa-circle-play");
      if (data_recevied == "One call away - By charlie puth") {
        selected_user_song = song1;
        curr_audio = song1;
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        selected_user_song = song2;
        curr_audio = song2;
      } else if (data_recevied == "Mercy - By Badshah") {
        selected_user_song = song3;
        curr_audio = song3;
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        selected_user_song = song4;
        curr_audio = song4;
      } else if (data_recevied == "Act my age - By One direction") {
        selected_user_song = song5;
        curr_audio = song5;
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        selected_user_song = song6;
        curr_audio = song6;
      }
    } else {
      let newdiv = document.createElement("div");
      newdiv.classList.add("current-song");
      newdiv.innerHTML = data_recevied;
      const parentdiv = document.querySelector(".current");
      parentdiv.appendChild(newdiv);
      is_newsong_selected = true;
      if (data_recevied == "One call away - By charlie puth") {
        selected_user_song = song1;
        curr_audio = song1;
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        selected_user_song = song2;
        curr_audio = song2;
      } else if (data_recevied == "Mercy - By Badshah") {
        selected_user_song = song3;
        curr_audio = song3;
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        selected_user_song = song4;
        curr_audio = song4;
      } else if (data_recevied == "Act my age - By One direction") {
        selected_user_song = song5;
        curr_audio = song5;
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        selected_user_song = song6;
        curr_audio = song6;
      }
    }
  });
}
