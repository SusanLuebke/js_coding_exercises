function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let filtered_nums = nums.filter((number) => number < 1);
  return filtered_nums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let output = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].substring(0, 1) == char) {
      output.push(names[i]);
    }
  }
  return output;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbs = [];
  for (
    let i = 0;
    i < words.length;
    i++ // use to repeatedly filter through a list
  ) {
    let split_words = words[i].split(" ");
    if (split_words[0] == "to") {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let int_vals = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      int_vals.push(nums[i]);
    }
  }

  return int_vals;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i]["data"]["city"]["displayName"]); // Why filter though all?
  }

  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  function roundToTwo(nums) {
    return +(Math.round(nums + "e+2") + "e-2");
  }

  if (nums.length == 0) {
    return [];
  }

  let input_nums = nums;
  let square_nums = Array(input_nums.length);

  for (let i = 0; i < input_nums.length; i++) {
    square_nums[i] = roundToTwo(Math.sqrt(input_nums[i]));
  }
  return square_nums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let word = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().search(str.toLowerCase()) != -1) {
      word.push(sentences[i]);
    }
  }

  return word;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let sides = [];
  for (let i = 0; i < triangles.length; i++) {
    sides.push(Math.max.apply(null, triangles[i])); // When don't know size of array, so have to push to it
  }
  return sides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
