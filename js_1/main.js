
// adding a function to record when a button is pressed
// When you have an array of elements, you cannot apply an event listener to all of them.
// When the transitionend event is over, we are going to run the removeTransition function

function playSound()
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if (!audio) return; // Stop the function from running all together
    audio.currentTime = 0; // Reset the sound to its starting point every time the key is clicked
    audio.play();
    //console.log(key);
    key.classList.add("playing");
}
// Remove the transition to return to their initial state.
function removeTransition(e)
{
  if (e.propertyName !== "transform") return;  // Skip if not transform
  this.classList.remove("playing")
  console.log(e.propertyName);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);
