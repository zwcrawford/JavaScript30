// Selecting all the inputs on the page.
// The querySelectorAll creates a NodeList, similar to an Array
// but without all the functionality. Can convert to an array though.
// And, NodeList has a foreach method.
const inputs = document.querySelectorAll(".controls input")

// Create the function to update the correct elements.
function handleUpdate() {
  const suffix = this.dataset;
}

// Then listen for a change on any of the elements.

// Listens for the last value after dragging.
inputs.forEach(input => input.addEventListener("change", handleUpdate));

// Listens for the values as you drag the sliders.
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));