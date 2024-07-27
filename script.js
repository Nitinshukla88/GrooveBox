let is_playing_song = false;
let curr_audio = "";
let selected_user_song = "";
let is_newsong_selected = false;
let song_index = -1;
let step = 0;
let val = true;
let isDuration_jumped = false;
let step_during_jump = 0;

const song1 = new Audio("/songs/one call away.mp3");
const song2 = new Audio("/songs/chahu mein ya na.mp3");
const song3 = new Audio("/songs/mercy.mp3");
const song4 = new Audio("/songs/malhari.mp3");
const song5 = new Audio("/songs/act my age.mp3");
const song6 = new Audio("/songs/pi jaun.mp3");

let arrayOfsongs = [song1, song2, song3, song4, song5, song6];

let seek = document.getElementById("seeker");

let startTimer = document.querySelector(".start");
let endTimer = document.querySelector(".music-dur");
let arr = startTimer.innerText.split(":");

seek.addEventListener("change", function () {
  const clickpoint = seek.value / 100;
  curr_audio.currentTime = (curr_audio.duration || 0) * clickpoint;
  let songs_current_time = curr_audio.currentTime | 0;
  switch(songs_current_time / 60 | 0){
    case 0: step_during_jump = 0; break;
    case 1: step_during_jump = 6; break;
    case 2: step_during_jump = 12; break;
    case 3: step_during_jump = 18; break;
    case 4: step_during_jump = 24; break;
    case 5: step_during_jump = 30; break;
    case 6: step_during_jump = 36; break;
  }
  console.log(songs_current_time);
  console.log(step_during_jump);
  isDuration_jumped = true;
});

function range_slider(music) {
  music.addEventListener("timeupdate", () => {
    let curr_time_ofSong = music.currentTime | 0;
    let min = (curr_time_ofSong / 10) | 0;
    if (curr_time_ofSong != 0 && val == true && curr_time_ofSong % 60 == 0) {
      step += 6;
      val = false;
      setTimeout(() => {
        val = true;
      }, 10000);
    }
    if(isDuration_jumped == true){
      step = step_during_jump;
    }
    console.log(step);
    startTimer.innerHTML =
      `0${(curr_time_ofSong / 60) | 0}:${min - step}` +
      `${curr_time_ofSong % 10}`;
    seeker.value = (music.currentTime / music.duration) * 100;
    if (music.currentTime == music.duration) {
      startTimer.innerHTML = "00:00";
      seeker.value = 0;
      let div_to_be_remove = document.querySelector(".current-song");
      div_to_be_remove.remove();
      is_playing_song = false;
      is_newsong_selected = false;
      play_pause_element.classList.remove("fa-circle-pause");
      play_pause_element.classList.add("fa-circle-play");
      startTimer.style.visibility = "hidden";
      endTimer.style.visibility = "hidden";
    }
  });
}

let backward_play_btn = document.querySelector(".play-backward");
let forward_play_btn = document.querySelector(".play-backward");

let arrayOf_songDivs = document.querySelectorAll(".songs");

backward_play_btn.addEventListener("click", function () {
  if (song_index == 0) {
    let ele = document.querySelector(".current-song");
    ele.innerHTML = "Pi jaun - Farhan Saeed";
    curr_audio.pause();
    curr_audio.currentTime = 0;
    is_playing_song = false;
    seeker.value = 0;
    song_index = 5;
    curr_audio = arrayOfsongs[arrayOfsongs.length - 1];
    selected_user_song = arrayOfsongs[arrayOfsongs.length - 1];
    play_pause_element.classList.remove("fa-circle-pause");
    play_pause_element.classList.add("fa-circle-play");
  } else {
    let ele = document.querySelector(".current-song");
    ele.innerHTML = arrayOf_songDivs[song_index - 1].innerHTML;
    curr_audio.pause();
    curr_audio.currentTime = 0;
    is_playing_song = false;
    seeker.value = 0;
    curr_audio = arrayOfsongs[song_index - 1];
    selected_user_song = arrayOfsongs[song_index - 1];
    play_pause_element.classList.remove("fa-circle-pause");
    play_pause_element.classList.add("fa-circle-play");
    song_index = song_index - 1;
  }
});

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

let song_elements = document.querySelectorAll(".songs");
for (i = 0; i < song_elements.length; i++) {
  song_elements[i].addEventListener("click", function (event) {
    startTimer.innerHTML = "00:00";
    startTimer.style.visibility = "visible";
    endTimer.style.visibility = "visible";
    step = 0;
    val = true;
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
        song_index = 0;
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        selected_user_song = song2;
        curr_audio = song2;
        song_index = 1;
      } else if (data_recevied == "Mercy - By Badshah") {
        selected_user_song = song3;
        curr_audio = song3;
        song_index = 2;
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        selected_user_song = song4;
        curr_audio = song4;
        song_index = 3;
      } else if (data_recevied == "Act my age - By One direction") {
        selected_user_song = song5;
        curr_audio = song5;
        song_index = 4;
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        selected_user_song = song6;
        curr_audio = song6;
        song_index = 5;
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
        song_index = 0;
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        selected_user_song = song2;
        curr_audio = song2;
        song_index = 1;
      } else if (data_recevied == "Mercy - By Badshah") {
        selected_user_song = song3;
        curr_audio = song3;
        song_index = 2;
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        selected_user_song = song4;
        curr_audio = song4;
        song_index = 3;
      } else if (data_recevied == "Act my age - By One direction") {
        selected_user_song = song5;
        curr_audio = song5;
        song_index = 4;
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        selected_user_song = song6;
        curr_audio = song6;
        song_index = 5;
      }
    }
  });
}
