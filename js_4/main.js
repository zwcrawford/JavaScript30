// working with array methods: filter, map, sort, and reduce

// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // An array of objects.
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // Filter the list of inventors for those who were born in the 1500's
    // 1. Declare a variable and assign it to the array.filter method which accepts a function as an arg.
    //    The function is going to loop over every item in our array...Albert, Isaac, Galileo...
    // 2. Once we have all the objects, we can decide if we want to keep them or not with an
    //    if statement.
    //    No need to have an else that returns nothing.
    //    < else {return false} > for example.

    const fifteen = inventors.filter(function(inventor) {
      if(inventor.year <= 1599 && inventor.year >= 1500)
      {
        return true; // 3. We keep this object because it meets our request parameters.
      }
    });
    console.table(fifteen); // 4. Split output into more readable rows in the console.
    // Returns Galileo and Johannes Kepler.

    // ****** We can reduce/refactor this function further: ******
    // As this returns true or false, we can write it inline.
    // The filter() method can take in 10 elements and only return 2 (unlike map()).
    // Parentheses around inventor.year are optional but read better to me.
    const fifteen_refactor = inventors.filter(inventor => (inventor.year <= 1599 && inventor.year >= 1500));
    console.table(fifteen_refactor); // 4. Split output into more readable rows in the console.
    // Returns Galileo and Johannes Kepler.

    // List of inventors who passed after 1965.
    const passed_refactor = inventors.filter(inventor => (inventor.passed >= 1965));
    console.table(passed_refactor); // 4. Split output into more readable rows in the console.
    // Returns Katherine Blodgett(1979) and Lise Meitner(1968).


    // Array.prototype.map()
    // *** NOTE: Remember .map() takes in an array, does stuff to it, and then provides a new array.
    // *** NOTE: Remember .map() will return the same number of items you give it (unlike filter()).
    // 2. Give us an array of the inventors' first and last names.
    // Use back ticks to handle space. Could have used concatenation as well.
    const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log(fullName);


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // We are using 1 and -1 to figure out which items to put on top
    // This is a comparison between two items.
    const sorted = inventors.sort(function(firstPerson, SecondPerson) {
      if (firstPerson.year > SecondPerson.year) {
        return 1;
      } else {
        return -1;
      }
    });
    console.table(sorted);

    // ****** We can reduce/refactor this function further: ******
    // Using a ternary operator, or a shorthand if statement
    // "?" is saying, if the expression before is true, return 1. Or otherwise, return -1
    const sorted_refactor = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(sorted_refactor);

    // Array.prototype.reduce()
    // The reduce() method allows you to build something on each item passed in.
    // Essentially it is declaring a variable and making a for loop.
    // total is giving you the running total from the last time the function ran.
    // 4. How many years did all the inventors live?

    const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

    // 5. Sort the inventors by years lived
      const sortYears = inventors.sort(function(a, b) {
        const last = a.passed - a.year;
        const next = b.passed - b.year;
        return last > next ? -1 : 1;
      });
      console.table(sortYears);

    // ****** We can reduce/refactor this function further: ******
    // Using a ternary operator, or a shorthand if statement
    const sortYears_refactor = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
    console.table(sortYears_refactor);


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // Source: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // You can call querySelector against any existing DOM element, not just document.
    // Could have written the below like: document.querySelector(".mw-category a")
    // To get the links that way.

    // We are using the spread operator to convert the NodeList returned by querySelectorAll
    // into an array so that we can then use the .map() function

    // Commented out for next exercise
    /*
    const category = document.querySelector('.mw-category');
    const links = [...category.querySelectorAll('a')];

    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));
    console.log(de);
    */

    // 7. sort Exercise
    // Sort the people array alphabetically by last name
    const sortPeople = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(", ");
      const [bLast, bFirst] = nextOne.split(", ");
      return aLast > bLast ? 1 : -1;
    });
    console.table(sortPeople);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // Start with a blank object, {}, and then every time we loop over, we check to see
    // if that is an existing entry and if not, we need to add it.
    // Then we need to increment it.
    const transportation = data.reduce(function(obj, item) {
      console.log(item);
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {}
    );
    console.log(transportation);