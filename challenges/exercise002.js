function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!

  // Why does it say ingredients is required when it is fillings?
  return sandwich["fillings"] 
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  if (person["city"] == "Manchester") 
  {
  return true
  }
  return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  var count = 0;
  for (var i = 0; i < arr.length; i++) 
  {
      if (arr[i] == "sheep") 
      {
        count += 1; 
      }
  }
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  var start_letter = person["address"]["postCode"].substring(0, 1)
  var city = person["address"]["city"]
  
  if (start_letter == "M" && city == "Manchester") {
      return true
    }
    return false
  }

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
