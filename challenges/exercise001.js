function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return (
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase()
  );
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const percent = vatRate / 100;
  const vat = percent * originalPrice;
  const total = originalPrice + vat;
  return +(Math.round(total + "e+2") + "e-2");
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  let percent = reduction / 100;
  let discount = percent * originalPrice;
  let total = roundToTwo(originalPrice - discount);

  return total;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let joinArray = Array(words.length);

  for (let i = 0; i < words.length; i++) {
    let splitString = words[i].split("");
    let reverseArray = splitString.reverse();
    joinArray[i] = reverseArray.join("");
  }
  return joinArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i]["type"] == "Linux") {
      count += 1;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return roundToTwo(total / scores.length);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ((n % 3 == 0) & (n % 5 == 0)) {
    return "fizzbuzz";
  } else if (n % 3 == 0) {
    return "fizz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
