// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateShortener() {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";

  // create a collection to store things user picked up
  let collection = [];
  collection = collection.concat(lowerCaseLetters.split(""));
  collection = collection.concat(upperCaseLetters.split(""));
  collection = collection.concat(numbers.split(""));

  // start generating newAddress
  let newAddress = "";
  for (let i = 0; i < 5; i++) {
    newAddress += sample(collection);
  }

  // return the generated newAddress
  return newAddress;
}

module.exports = generateShortener;
