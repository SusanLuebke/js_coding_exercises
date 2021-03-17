function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  // Why does it say ingredients is required when it is sandwich?
  return sandwich["fillings"];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  if (person["city"] == "Manchester") {
    return true;
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "sheep") {
      count += 1;
    }
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  let start_letter = person["address"]["postCode"].substring(0, 1);
  let city = person["address"]["city"];

  if (start_letter == "M" && city == "Manchester") {
    return true;
  }
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
