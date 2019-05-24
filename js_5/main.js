// Write a little js to open and close the panels.

// 15. First we want to get a NodeList of all the panels.
const panels = document.querySelectorAll(".panel");

// Then write a toggle function.
function toggleOpen() {
  this.classList.toggle("open");
}
// 18. Then write a toggle function.
// As there will be several triggered transitionend events,
// we need to pass in an event, e.
function toggleActive(e) {
  // This shows that 2 things are being transitioned here. font-size and flex-grow.
  // 19. In this case, flex-grow is all we are concerned with.
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  };
}

// 16. Then on each of the panels, we are going to listen for a click.
// It is not calling "toggleOPen()" as tht would happen on page-load.
// Here we don;t want to run the function but rather, we want to give reference to it.
// In other words, if a panel is clicked, go run this function.
// Now when a panel is clicked, it opens up to the expanded view.
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
// 17. Listen for the transitionend event. And we are going to toggleActive
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));