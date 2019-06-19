
// This function will reduce the amount of times the event below will happen.
/*
  The program will run debounce when we scroll but will only run checkSlide
  based on the value of the "wait" value. If wait = 20, it will run once every 20 milliseconds.
*/
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll(".slide-in")

// Every time a person scrolls
function checkSlide(e) {
  // Log the event to the console when passing "e" as a parameter.
  //console.log(e);
  // Count the number of events logged. This can be a performance issue.
  // High count for even a slight scroll without the debounce.
  //console.count(e);

  //*** HOW TO COUNT PIXELS ON SCROLL FROM TOP OF PAGE ***
  console.log(window.scrollY)
  // Want the pics to animate when the scroll action has revealed over 50% of the height of the image.
  sliderImages.forEach(sliderImage => {
    // Gives us the pixel level at which each image should slide in. Divide by 2 for
    // 50% of height.
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    console.log(slideInAt)
  });
}
// Calls checkSlide when user scrolls.
// To use debounce here, wrap it around checkSlide.
// And afterward, the events logging to the console are much less.
// Interestingly it is dependant on the browser's width. Maximized = less scrolls.
                               // debounce(checkSlide, n)) - To test other time values: debounce(checkSlide, 200))
window.addEventListener("scroll", debounce(checkSlide));

// Typically when involving the scroll in a program, debouncing is needed.