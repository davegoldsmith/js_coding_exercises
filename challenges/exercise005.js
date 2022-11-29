export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const num = nums.indexOf(n);
  if (num != -1 && nums.length > num + 1) {
    return nums[num + 1];
  } else {
    return null;
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let zerosTally = 0;
  let onesTally = 0;
  str.split('').forEach(element => {
    if (element === '0') {
      zerosTally++;
    } else if (element === '1'){
      onesTally++;
    }
  });
  return {0: zerosTally, 1: onesTally};
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let result = 0;
  arrs.forEach(arr => arr.forEach(element => result+=element));
  return result;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.map((element, index) => {
    if (index === 0) {
      return arr[arr.length -1];
    } else if (index === arr.length - 1) {
      return arr[0];
    } else {
      return element;
    }
  });
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
  for (let key in haystack) {
    if (haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      found = true;
    }
  }
  return found;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {};
  str = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
  str.split(' ').forEach(word => {
    if(frequencies[word] === undefined) {
      frequencies[word] = 1;
    } else {
      frequencies[word]++;
    }
  });
  return frequencies;
};
