document.addEventListener("click", function (data) {
  console.log(data.target.textContent);
  let audio = new Audio("/songs/malhari.mp3");
  if (data.target.textContent == "Sorry - By Justin Bieber") {
    audio.play();
  }
});
