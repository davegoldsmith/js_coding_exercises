import { 
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered 
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toEqual(8);
    expect(sumMultiples([1, 10, 90, 56])).toEqual(100);
  });
  test("returns o if there are no multiples of 5 or 3", () => {
    expect(sumMultiples([11, 97, 9811, 56, 37])).toEqual(0);
  });
  test("returns the sum of any numbers that are a multiple of 3 or 5 with decimals", () => {
    expect(sumMultiples([1, 10, 95.0, 56])).toEqual(105);
  });
});

describe("isValidDNA", () => {
  test("returns true if the string is a valid DNA string", () => {
    expect(isValidDNA("GATTACA")).toBe(true);
    expect(isValidDNA("CAT")).toBe(true);
  });
  test("returns false if the string is not a valid DNA string", () => {
    expect(isValidDNA("BATTLESTAR GALLACTICA")).toBe(false);
    expect(isValidDNA("MIKE GATTING")).toBe(false);
    expect(isValidDNA("ACDC")).toBe(false);
  });
});

describe("getComplimentaryDNA", () => {
  test("returns complimentary DNA string to that given", () => {
    expect(getComplementaryDNA("GATT")).toEqual("CTAA");
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
  });
});

describe("isItPrime", () => {
  test("returns true when a number is prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(29)).toBe(true);
    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(307)).toBe(true);
    expect(isItPrime(104729)).toBe(true);
    expect(isItPrime(87178291199)).toBe(true);
  });
  test("returns false if a number is not prime", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(27)).toBe(false);
    expect(isItPrime(99)).toBe(false);
    expect(isItPrime(10000)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a matrix as an array of arrays (based on the number)", () => {
    expect(createMatrix(3, "egg")).toEqual(
      [
        ["egg", "egg", "egg"],
        ["egg", "egg", "egg"],
        ["egg", "egg", "egg"]
      ]
    );
    expect(createMatrix(4, "foo")).toEqual(
      [
        ["foo", "foo", "foo", "foo"],
        ["foo", "foo", "foo", "foo"],
        ["foo", "foo", "foo", "foo"],
        ["foo", "foo", "foo", "foo"]
      ]
    );
    expect(createMatrix(5, "young")).toEqual(
      [
        ["young", "young", "young", "young", "young"],
        ["young", "young", "young", "young", "young"],
        ["young", "young", "young", "young", "young"],
        ["young", "young", "young", "young", "young"],        
        ["young", "young", "young", "young", "young"]
      ]
    );    
  });
});

describe("areWeCovered", () => {
  const staffRota = [
    {name: "john", rota: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"]},
    {name: "paul", rota: ["Monday", "Tuesday", "Thursday", "Friday"]},
    {name: "ringo", rota: ["Monday", "Thursday", "Saturday"]},
    {name: "george", rota: ["Tuesday", "Thursday", "Friday"]},
    {name: "yoko", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
      
  ]  
  test("returns false if there is not enough staff scheduled", () => {
    expect(areWeCovered(staffRota, "Yesterday")).toBe(false);
    expect(areWeCovered(staffRota, "Saturday")).toBe(false);
    expect(areWeCovered(staffRota, "Sunday")).toBe(false);
  })
  test("returns true if there are enough staff scheduled", () => {
    expect(areWeCovered(staffRota, "Monday")).toBe(true);
    expect(areWeCovered(staffRota, "Tuesday")).toBe(true);
    expect(areWeCovered(staffRota, "Thursday")).toBe(true);
  })  

});
