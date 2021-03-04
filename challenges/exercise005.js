const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  for (var i = 0; i < nums.length; i++) 
  {
    if (nums[i] == n) {
      if (i == nums.length-1) 
      {
        return null
      }
      return nums[i+1]
    }
  }
  return null
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
    var sum = 0
    
    for (var i = 0, length = str.length; i < length; i++) 
    {
      sum += Number(str[i]);
    }
    
    return {
      '0': str.length - sum,
      '1': sum
    }
  }


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!

	return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  )
}

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

  var summed_vals = 0
  for (var i = 0; i < arrs.length; i++) 
  { 
    element = arrs[i]
      for (j = 0; j < element.length; j++) // Not sure about this section?
      {
        summed_vals += element[j]
      }
    }
    return summed_vals
  }

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  if (arr.length < 2)
  {
    return arr
  }
    
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

  const {name, description, price, store, code} = haystack
  var search_string = name+description+price+store+code
  console.log(name, description, price)

  if (search_string.search(searchTerm) != -1)
  {
    return true
  }
  else
  {
    return false
  }

  // for (key in haystack) 
  // { 
  //   console.log(key)
  //   if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) 
  //   {
      
  //     //console.log(haystack[key])
  //     //console.log(searchTerm)
  //     return true
  //   }
    
  // }
//   return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
  str = str.toLowerCase() // converts string to lowercase
  str = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"")

  var words = str.replace(/[.]/g, '').split(/\s/);
  var freqMap = {};
  words.forEach(function(w) 
  {
      if (!freqMap[w]) {
          freqMap[w] = 0;
      }
      freqMap[w] += 1;
  });

  return freqMap;
};

// 

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
