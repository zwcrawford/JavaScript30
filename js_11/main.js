// 1. Get elements

// 1.a. Get the main div of the body - .player
const player = document.querySelector(".player");
// 1.b. Use player as parent to get children.
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// 2. Build functions

// Toggle play
function togglePlay() {
  // "paused" is a property of video so we can use that to toggle.
  // There is no play property.
  if (video.paused) {
    video.play();
  }else {
    video.pause();
  }
}

// Here's another way to do it with a ternary statement.
// Some feel it is harder to read.
/*

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

*/

// A third way.
// You could even put the controls in without declaring a variable.
/*

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

*/
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
  //console.log("Update the button");
}
// This is working with the data-skip attribute set on the button.
function skip() {
  //console.log("skipping");
  //console.log(this.dataset.skip); // Gives you the data
  // This is a string so use parseFloat
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  //console.log(this.value);
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  //console.log(e)
}
// 3. Attach event listeners

// This enables clicking the screen to play or pause.
// Does not involve controls at bottom of player.
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//Progress slider
video.addEventListener("timeupdate", handleProgress);


// Doing the same for the togglePlay control.
toggle.addEventListener("click", togglePlay);

/*
   We also need to change the text from the play to the
   paused symbol. We could put this inside the togglePlay
   function but there are other things that we would want
   to pause the video too. Like a pop-up or if another
   app begins playing different media.
   So rather than do that, we will listen for the video
   when it is paused...no matter what caused it to pause.
   This allows us to only focus on the buttons changing.
*/
// Skip and rewind buttons
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

//Lastly, add the full-page button as an extra challenge.