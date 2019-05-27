const pressed = [];
const secretCode = 'zac';
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  // start searching from the back of the array.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    // Adds random rainbows and unicorns to page, lol.
    cornify_add();
  }
  console.log(pressed);
});