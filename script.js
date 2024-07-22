let is_playing_song = false;
let curr_audio = "";

let seek = document.getElementById("seeker");

seek.addEventListener("change", function () {
  const clickpoint = seek.value/100;
  curr_audio.currentTime = (curr_audio.duration || 0) * clickpoint;
});

function range_slider(music) {
  music.addEventListener("timeupdate", () => {
    seeker.value = (music.currentTime / music.duration) * 100;
    console.log(seeker.value);
    if (seeker.value == 100) {
      seeker.value = 0;
      let div_to_be_remove = document.querySelector(".current-song");
      console.log(div_to_be_remove);
      div_to_be_remove.remove();
      is_playing_song = false;
    }
  });
}

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

    if (is_playing_song == true) {
      let ele = document.querySelector(".current-song");
      ele.innerHTML = data_recevied;
      curr_audio.pause();
      curr_audio.currentTime = 0;
      if (data_recevied == "One call away - By charlie puth") {
        song1.play();
        curr_audio = song1;
        range_slider(song1);
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        song2.play();
        curr_audio = song2;
        range_slider(song2);
      } else if (data_recevied == "Mercy - By Badshah") {
        song3.play();
        curr_audio = song3;
        range_slider(song3);
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        song4.play();
        curr_audio = song4;
        range_slider(song4);
      } else if (data_recevied == "Act my age - By One direction") {
        song5.play();
        curr_audio = song5;
        range_slider(song5);
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        song6.play();
        curr_audio = song6;
        range_slider(song6);
      }
    } else {
      let newdiv = document.createElement("div");
      newdiv.classList.add("current-song");
      newdiv.innerHTML = data_recevied;
      const parentdiv = document.querySelector(".footer-main");
      parentdiv.appendChild(newdiv);
      if (data_recevied == "One call away - By charlie puth") {
        song1.play();
        range_slider(song1);
        curr_audio = song1;
        is_playing_song = true;
      } else if (data_recevied == "Chahun main ya na - Ashiqui 2") {
        song2.play();
        range_slider(song2);
        curr_audio = song2;
        is_playing_song = true;
      } else if (data_recevied == "Mercy - By Badshah") {
        song3.play();
        range_slider(song3);
        curr_audio = song3;
        is_playing_song = true;
      } else if (data_recevied == "Malhari - Bajirao Mastani") {
        song4.play();
        curr_audio = song4;
        range_slider(song4);
        is_playing_song = true;
      } else if (data_recevied == "Act my age - By One direction") {
        song5.play();
        range_slider(song5);
        curr_audio = song5;
        is_playing_song = true;
      } else if (data_recevied == "Pi jaun - Farhan Saeed") {
        song6.play();
        range_slider(song6);
        curr_audio = song6;
        is_playing_song = true;
      }
    }
  });
}
