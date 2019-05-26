const canvas = document.querySelector("#draw");
/*
   Canvas on the web is like MS Paint where you just get a block of
   actual pixels that you draw on but you don't draw on the actual canvas element in html but you draw on something called the context.
*/
// Grab the context and request "2d" instead of "3d"
const ctx = canvas.getContext("2d")
// Now size up canvas to be exact width of window.
// By default is is 800 x 800 px.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
   Brush settings:
   -- like what start color
   -- what happens when two lines meet
   -- what happens at the end of a line
*/
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

/*
   Next we need some dummy variables.

   We are basically creating a flag here that says only draw when the user
   is pressing down to draw, not when she lifts up and then repositions the
   cursor.

   When you press down we are going to set this to true but otherwise and by
   default, it will be false.
*/
let isDrawing = false;

/*
   These will help us out. To draw a line, you need a starting (x,y) and an
   ending (x,y).
*/
let lastX = 0;
let lastY = 0;

// Need a function that takes an event and will be called whenever we move the
// cursor across the canvas.
function draw(e) {
  // Listen for the mouse-over event on the canvas. Console log shows all the movements.
  if (!isDrawing) return; // This stops the function from running when not pressing down.
  console.log(e)
  ctx.beginPath();
  // Need to give start and endpoints
  // Start from:
  ctx.moveTo(lastX, lastY);
  // These are coming from the event that happened
  // Go to:
  ctx.lineTo(e.offsetX, e.offsetY);
  // The three previous lines setup the line but it does not appear
  // until after this part runs:
  ctx.stroke();
  // We need to update these:
  //lastX = e.offsetX;
  //lastY = e.offsetY;

  // With ES6, we can do this with one line:
  // This is called destructuring an array.
  [lastX, lastY] = [e.offsetX, e.offsetY];
};

// When mouse is down, run a quick arrow function inline.
// Turn this to a block function:
//canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // Also have to update the last x and y here and pass the event, e as an arg.
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
/*
   One more to listen for mouseout. This is for when the cursor may leave the drawing area.
   If the cursor comes back onto the canvas, the code will not still think the mouse is down
   and therefore will not continue to draw.
*/
canvas.addEventListener("mouseout", () => isDrawing = false);