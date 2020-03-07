let prime = [5, 8, 9, 11, 12, 13, 15, 18, 19, 24, 25, 27, 29, 34, 35, 39];

let loopCounter = 0;

//let sortedArray = prime.sort((a, b) => a - b); //sort if necessary

const newSearch = (array, targetValue) => {
  let min = 0;
  let max = array.length - 1;
  let oneGuess;

  while (min <= max) {
    oneGuess = Math.floor((max + min) / 2);

    if (array[oneGuess] === targetValue) {
      return oneGuess;
    } else if (array[oneGuess] < targetValue) {
      min = oneGuess + 1;
      loopCounter++;
    } else {
      max = oneGuess - 1;
      loopCounter++;
    }
  }
  return -1; // in case the number is not in the collection, we resolve it to -1
};

prime.forEach(onePrime=>{
    const result = newSearch(prime,onePrime);
    console.log(`Found prime number-> ${onePrime} @ index number ==> ${result} `);
})

// const primeNumber = 39;
// const result = newSearch(prime, primeNumber);
// console.log(
//   `Found prime number-> ${primeNumber} @ index number ==> ${result} with counts==>${loopCounter}`
// );
