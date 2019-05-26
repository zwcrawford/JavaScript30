const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
  // ****** Part 1 ******
    /*
       To inspect the above attribute, do the following:
       -- Ensure Dev Tools is showing "Elements"
       -- Inspect Element in browser
       -- Right-click the element tag in "Elements" section (not in browser)
       -- Select "Break on..."> "attribute modifications" from the menu
          -- This adds a debugger to that paragraph.
          -- It triggers and shows what attribute is causing.

       ** This is when you would like to see the code that is causing an action       for a particular element in the browser. You can then reference its         attributes.
    */
  // ****** Part 2 ******

    // Regular
    console.log("hello");

    // Interpolated
    // This is the old way. It passes a smile emoji as the 2nd string.
    console.log("Hello, I am a %s string!", "\uD83D\uDE00");
    // But now, with ES6, we can do the same thing with back ticks:
    var smileEmoji = "\uD83D\uDE00";
    console.log(`Hello, I am a ${smileEmoji} string!`);

    // Styled
    // Style your text with %c (*** must be lowercase c) in front of the string.
    // Then add the styles in the second string.
    console.log("%c I am some great texty string!",
                "font-size: 50px; background: grey; text-shadow: 6px 6px 0 blue");

    // Warning
    // This causes a warning message in the console with the yellow banner.
    console.warn("OHH NOES!!!");

    // Error
    // This causes an error message in the console with the red banner.
    console.error("We are going down!!!");

    // Info
    // This causes an information message in the console with a blue icon.
    console.info("I like progressive house music");
    // Looks as if console.info and console.log have been deemed both to be info?!?
    // https://bugs.chromium.org/p/chromium/issues/detail?id=714235
    // And now the blue info icon no longer appears...anyhoo, here's a workaround.
    // A white "i" with a blue background, lol.
    console.log("%ci%c Hello", "color: white; background: blue;", "");

    // Testing
    // Use .assert() to check if things are true.
    // The following line will not show up in the console because the expression is
    // true.
    console.assert(1 === 1, "That's wrong");
    // However, since the one p tag on our index.html page does not have a class of
    // "title", It returns this error message, "That's wrong".
    const p = document.querySelector("p");
    console.assert(p.classList.contains("title"), "That's wrong");

    // Clearing


    // Viewing DOM Elements
    // Grouping together
    // counting
    // timing