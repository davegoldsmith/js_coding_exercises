export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === 'Manchester';
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return (people%40 === 0) ? people/40 : Math.floor(people/40) + 1;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(element => element === 'sheep').length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.postCode.charAt(0) === 'M' && person.address.city === 'Manchester');
}
