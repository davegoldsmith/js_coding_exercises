export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num);

}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelled = '';
  words.forEach((word, index) => {
    if (index === 0) {
      camelled += word;
    } else {
      camelled += word.charAt(0).toUpperCase() + word.substring(1, word.length);
    }
  });
  return camelled;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let counter = 0;
  people.forEach(person => {
     if (person.subjects.length > 0) {
       counter += person.subjects.length;
     }
  });
  return counter;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = false;
  menu.forEach(menuItem => {
    // use 'for of loop' to allow break statement once
    // we determine the ingredient is somewhere in the menu
    // then we want to stop
    for (const menuIngredient of menuItem.ingredients) {
      if (menuIngredient === ingredient) {
        result = true;
        break;
      }
    }
  });

  return result;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const result = [];
  arr1.forEach(element => {    
    if (arr2.includes(element) && result.includes(element) === false) { 
      result.push(element);
    }
  });
  return result.sort();
}
