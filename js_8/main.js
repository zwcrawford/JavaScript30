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