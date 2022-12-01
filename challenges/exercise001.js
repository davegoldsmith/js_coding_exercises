// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1,word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + '.' + lastName.charAt(0);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const result = (originalPrice/100 * vatRate) + originalPrice;
  // if a whole number than go with that 
  // otherwise if the result is a float then formnat to 2 decimal places
  return (Number.isInteger(result)) ? result : parseFloat(result.toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let result =  originalPrice - (originalPrice/100 * reduction);
  // if an whole number than go with that 
  // otherwise if the result is a float then formnat to 2 decimal places
  return (Number.isInteger(result)) ? result : parseFloat(result.toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length%2 === 0) {
    // even
    return str.substring(str.length/2 - 1, str.length/2 + 1);
  } else {
    // odd
    return str.charAt(str.length/2);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  const linuxUsers = users.filter(element => {
    return element.type === 'Linux';
  });

  return linuxUsers.length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let scoreTotal = 0;
  scores.forEach(score => scoreTotal += score);
  const result = scoreTotal/scores.length;
  return (Number.isInteger(result)) ? result : parseFloat(result.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  let result = '';
  if (n%3 !== 0 && n%5 !== 0) {
    result = n;
  } else {
    if (n%3 === 0) {
      result += 'fizz';
    }
    if (n%5 === 0) {
      result += 'buzz';
    }
  }
  return result;
}
