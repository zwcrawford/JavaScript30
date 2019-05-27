// Select all the checkboxes first to test the functionality.
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
// Console was logging alone but set it to an event which can be passed to the
// forEach loop below for every checkbox.
function handleCheck(e) {
  //console.log(e);
  // Check if the shift key was held down.
  // And check if the box was checked (and not unchecked).
  // Declare a variable for the items between the first and second box.
  // Set to false by default.
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    /*
       We are looping through all checkboxes for every event and looking for the FIRST one that was checked and then the SECOND one. Then you only need to check all those between the first and second.
    */
   checkboxes.forEach(checkbox => {
     //console.log(checkbox);
     // If the first or the last boxes are checked.
     if (checkbox === this || checkbox === lastChecked) {
       // Usually we would set inBetween to true but since we want this to
       // work going up or down, the solution here is to set it to
       // its opposite - !inBetween
       // inBetween is a flag variable.
       inBetween = !inBetween;
       //console.log("Starting to check them in between!");
     }
     // Another if statement
     if (inBetween) {
       checkbox.checked = true;
     }
   });
  }
  // Pass this in instead and when you type "lastChecked" in the console, it returns the input that was checked.
  lastChecked = this;
}
// At this point, the console logs if user checks or unchecks a box.
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

/*
   In trying to think this out, you kind of instinctively go for the route above...just catch the clicks for each in the console. But then what?

   If you look at the browser, and none of the boxes are checked...
   Then you click one...what should happen next?

   Makes sense that you may want to save that first check as a variable.
   We do that above with lastChecked. Then we alter the handleCheck function.

   While you can locate the checkboxes on the DOM, or use the parent/ child
   relationship...those methods can be both more fragile and rigid. This way,
   you are not dependant on the HTML staying the same.
*/