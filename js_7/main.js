// ## Array Cardio Day 2
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


// 1. Array.prototype.some() // is at least one person 19 or older?
// Will tell you if at least one thing meets the criteria you specify.
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
});
// Will show you the value of the variable - true in this case.
console.log(isAdult);
// Will show you the name of the variable as well as the value with brackets.
console.log({isAdult});

/******  We can refactor this down more. *******/
const isAdult2 = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});
console.log(isAdult2);
console.log({isAdult2});

/******  Even more refactor. *******/
// Put what we were setting to currentYear and placing it directly in the function.
// Remove the brackets and use the implicit return instead.
const isAdult3 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );
console.log(isAdult3);
console.log({isAdult3});
// Array.prototype.every() // is everyone 19 or older?
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423