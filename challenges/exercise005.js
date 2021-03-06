const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == n) {
      if (i == nums.length - 1) {
        return null;
      }
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let sum = 0;

  for (let i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  }

  return {
    0: str.length - sum,
    1: sum,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let summed_vals = 0;
  for (let i = 0; i < arrs.length; i++) {
    let element = arrs[i];
    for (
      let j = 0;
      j < element.length;
      j++ // Not sure about this section?
    ) {
      summed_vals += element[j];
    }
  }
  return summed_vals;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length < 2) {
    return arr;
  }

  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  const obj_vals = Object.values(haystack);
  for (let i = 0; i < obj_vals.length; i++) {
    if (typeof obj_vals[i] === "string" || obj_vals[i] instanceof String) {
      if (obj_vals[i].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
        return true;
      }
    }
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  str = str.toLowerCase(); // converts string to lowercase
  str = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");

  let words = str.replace(/[.]/g, "").split(/\s/);
  let freqMap = {};
  words.forEach(function (w) {
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
  getWordFrequencies,
};
