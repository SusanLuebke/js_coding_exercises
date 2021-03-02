function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  // console.log(firstName.substring(0, 1).toUpperCase())
  // console.log(lastName.substring(0, 1).toUpperCase())

  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!

  var percent = vatRate/100
  var vat = percent*originalPrice
  var total = originalPrice + vat
  return total

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

  var percent = reduction/100
  var discount = percent*originalPrice
  var total = originalPrice-discount
  return total
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  var position;
  var length;

  if(str.length % 2 == 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!

  var joinArray = Array(words.length);

  for (var i = 0; i < words.length; i++)
  {
    var splitString = words[i].split("");
    var reverseArray = splitString.reverse();
    joinArray[i] = reverseArray.join("");
    // console.log(joinArray)
  }
  return joinArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  
  var count = 0;
  for (var i = 0; i < users.length; i++) 
  {
      if (users[i]['type'] == "Linux") 
      {
        count += 1; 
      }
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!

  var total = 0;
  for (var i = 0; i < scores.length; i++) 
  {
    total += scores[i];
  }
  return (total / scores.length)
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  total = 0
  if (n % 3 == 0 & n % 5 == 0)
  {
    return "fizzbuzz"
  }
  else if (n % 3 == 0)
  {
    return "fizz"
  }
  else if (n % 5 == 0)
  {
    return "buzz"
  }
  else {
    return n
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
  simpleFizzBuzz
};
