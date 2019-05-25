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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, "gi")
      const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="name">${numberWithCommas(place.population)}</span>
        </li>
        `;
    // This will return an array so with the .join() here at the end, it makes it suck less.
    }).join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  // This is working for change - when a user clicks out
  // But also for a keyup - every time they type, it is searching.
  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
