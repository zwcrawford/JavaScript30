const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 1. Create a variable to hold the cities.
const cities = [];

// 2. Browsers can use fetch instead of JSON.
// 3. Fetch itself will return a promise, so set it to a variable
fetch(endpoint)
  // How we work with promises. Convert the raw data to JSON.
  // In the second .then, we cannot assign "data" to "cities" because
  // we have "cities" set as a const above. We can set it to let
  // or just do what we did below. This push with the spread will add
  // one city at a time to cities.
  .then(blob => blob.json())
  .then(data => cities.push(...data))
// You can see that it is listed as a Promise in the console.
console.log(cities);
