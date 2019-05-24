// Create the second hand outside the function.
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate()
{
  // Get the time.
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Manipulate time for the clock dimensions.
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  // Set the rate of each hand movement to their respective totals above.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
// 1000 milliseconds or 1 second.
setInterval(setDate, 1000);

// When the hands get to 90 degrees (12) there is a glitchy reset action
// that can be temporarily suspended with some if satements inside the setDate
// function.
