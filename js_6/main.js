const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 1. Create a variable to hold the cities.
const cities = [];

// 2. Browsers can use fetch instead of JSON.
// 3. Fetch itself will return a promise, so set it to a variable
// How we work with promises. Convert the raw data to JSON.
// You can see that it is listed as a Promise in the console.
// In the second .then, we cannot assign "data" to "cities" because
// we have "cities" set as a const above. We can set it to let
// or just do what we did below. This push with the spread will add
// one city at a time to cities.
// We need a function that takes the massive array of cities and
// filters it down when someone starts typing in the search box.
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
  // Figure out if the city or state match what was searched.

      // For the second argument, g is "global" meaning it will look
      // through the entire string and i is for "insensitive" to case.
      const regex = new RegExp(wordToMatch, "gi")
      return place.city.match(regex) || place.state.match(regex)
    });
  }
  function displayMatches() {
    console.log(this.value);
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
