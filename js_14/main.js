// #1
// Start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);  // Prints 100 100
age = 200;
console.log(age, age2);  // Prints 200 100, does not alter age2.

let name = "Zac";
let name2 = name;
console.log(name, name2);  // Prints Zac Zac
name = "Zachary";
console.log(name, name2);  // Prints Zachary Zac, does not alter name2.

// #2
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// And we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:
//team[3] = "Gabs";
// however what happens when we update that array?
console.log(players, team);

/*
  Now here is the problem - we have edited the original array too!
  Why? It's because that is an array reference, not an array copy. They both point to the same array!

  So, how do we fix this? We take a copy instead of a reference!
*/

// If you pass nothing to slice, it will make a copy.
// When you change the copy, it does not alter the original.
const team2 = players.slice();
console.log(players);  // Prints ["Wes", "Sarah", "Ryan", "Poppy"]
team2[3] = "Gabs";
console.log(team2);  // Prints ["Wes", "Sarah", "Ryan", "Gabs"]

/*
  One way to create a new array is to use an empty bracket and then concat the old one in.
*/
const team3 = [].concat(players);
console.log(team3);

/*
  Or, lastly, we can use the new ES6 Spread operator. Now when we update team4,
  the original players isn't changed.
  Spread takes every item from your iterable and puts it in the containing
  array in this case (we have used spread into a function as well).
*/
const team4 = [...players];
team4[3] = "Mariah";
console.log(team4);  // Prints array updated w/ "Mariah"
console.log(players);  // Prints original array.

/*
  Lastly, here is another way to bring in the items from an outside array.

  This and the spread directly above are favored,
*/
const team5 = Array.from(players);
team5[3] = "Isabella";
console.log(team5);


// #3
/*
  The same thing goes for objects, let's say we have a person object and we
  want to make a copy,
*/

const person = {
  name: 'Clara',
  age: 28
};
/*
  This is a reference, not a copy, and changes made in this manner will be
  made in both the dancer and person object.
*/
const dancer = person;
dancer.age = 11;
console.log(dancer);
console.log(person);

// How to make a copy instead? For objects, we use Object.assign()

// First, start w/ a blank object as an arg - Object.assign({},);

// Then pass in the object you want to copy all the properties from.
      // Object.assign({}, person);

// Next, you will fold in the properties you wish to overwrite.
      // Object.assign({}, person, {age: 31});

// Lastly, assign it to your own variable
const copycat = Object.assign({}, person, {age: 31});
console.log(copycat);  // Prints {name: "Clara", age: 31}
console.log(person);  // Prints {name: "Clara", age: 11}

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
