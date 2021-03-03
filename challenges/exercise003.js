function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  
  input_nums = parseInt(nums)
  square_nums = Array(input_nums.length)

  for (var i = 0; i < input_nums.length; i++) 
  {
    square_nums[i] = input_nums[i] * input_nums[i]
  }

  return square_nums 
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  if (words.length == 1) 
  {
    return words
  }
  for (var i = 1; i < words.length; i++) 
  {
    words[i] = words[i].substring(0, 1).toUpperCase + words[i].substring(1)
  }

  return words.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  var count = 0
  for (var i = 0; i < people.length; i++) 
  {
    count += people[i]["subjects"].length
  }
  return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
 
  for (var i = 0; i < menu.length; i++) 
  {
    ingredients = menu[i]["ingredients"]
    if (ingredients.includes(ingredient)) 
    {
      return true
    }
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
