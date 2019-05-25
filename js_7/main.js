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

// 1. Array.prototype.some()
// Is at least one person 19 or older?
// .some() will tell you if at least one thing meets the criteria you specify.
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


// 2. Array.prototype.every()
// Is EVERYONE 19 or older?
// .every() will check every item to see if it fits the criteria you provide.
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19 );
console.log(allAdults);
console.log({allAdults});  // Returns false as not every item meets our criteria.
                           // EVERYONE is not older than 19 as Lux is quite young.


// 3. Array.prototype.find()
// find the comment with the ID of 823423
/*
   Kind of like filter() but instead of returning a subset of the array, it returns the one or, FIRST item that meets the specified criteria. Seems especially useful when dealing
   with ids or other unique values.
*/
const comment = comments.find(comment => {
   if (comment.id === 823423) {
    return true;
   }
});
console.log(comment);
console.log({comment});


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423