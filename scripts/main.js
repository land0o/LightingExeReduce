// reduce - iterates the array and preforms an action on each item in the array and reduces the array to a single value

// Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.
const outputContainer = document.querySelector("#output");
outputContainer.innerHTML += "<h1>Rainfall</h1>";

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

const totalRainfall = monthlyRainfall.reduce(
  (Total, Amount) => (Total += Amount),
  0
);

console.log("Rainfall:", totalRainfall);

// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.
const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog"
];

const sentence = words.reduce((Total, Words) => Total + " " + Words);

console.log(sentence);
