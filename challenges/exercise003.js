function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");


  if (nums.length == 0) {
    return []
  }

  input_nums = nums
  square_nums = Array(input_nums.length)

  for (var i = 0; i < input_nums.length; i++) {
    square_nums[i] = input_nums[i] * input_nums[i]
  }

  return square_nums
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");


  if (words.length < 1) // if length is one variable then do nothing
  {
    return words
  }
  for (var i = 1; i < words.length; i++) // defining loop, start at 1, loop until length of string
  {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1) // i for index changing
  }

  return words.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");


  var count = 0
  for (var i = 0; i < people.length; i++) {
    count += people[i]["subjects"].length
  }
  return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");


  for (var i = 0; i < menu.length; i++) {
    ingredients = menu[i]["ingredients"]
    if (ingredients.includes(ingredient)) {
      return true
    }
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");


  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index)
  }

  var tobesorted = removeDuplicates(arr1.filter(element => arr2.includes(element)))
  return tobesorted.sort()

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
