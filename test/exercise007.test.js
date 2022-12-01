import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns the sum of all digits in a given number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(666)).toBe(18);
    expect(sumDigits(10101010)).toBe(4);
    expect(sumDigits(0)).toBe(0);
  });
});

describe("createRange", () => {
  test("returns an array of numbers based on the start, end and step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(5, 5, 2)).toEqual([5]);
  });
  test("returns an array of numbers based on the start and end (step defaults to 1)", () => {
    expect(createRange(5, 9)).toEqual([5, 6, 7, 8, 9]);
    expect(createRange(9, 9)).toEqual([9]);
  });
  test("returns empty array if start is after end", () => {
    expect(createRange(6, 5, 2)).toEqual([]);
    expect(createRange(6, 5)).toEqual([]);
  });
});

describe("getScreentimeAlertList", () => {
  const userScreenTimes = [
    {
      username: "bob_monkhouse",
      name: "Bob Monkhouse",
      screenTime: [
                    { date: "2022-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2022-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2022-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2022-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    { date: "2022-11-30", usage: { twitter: 13, instagram: 54, facebook: 62} }
                  ]
    },
    {
      username: "bruce_forsyth",
      name: "Bruce Forsyth",
      screenTime: [
                    { date: "2022-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2022-06-13", usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2022-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    { date: "2022-11-30", usage: { mapMyRun: 22, whatsApp: 41, facebook: 9, safari: 31} },
                  ]
    },
  ];

  test("returns array of users that have had over 100 mins screen time on the given date", () => {
    expect(getScreentimeAlertList(userScreenTimes, "2022-05-04")).toEqual(["bob_monkhouse"]);
    expect(getScreentimeAlertList(userScreenTimes, "2022-11-30")).toEqual(["bob_monkhouse", "bruce_forsyth"]);
    expect(getScreentimeAlertList(userScreenTimes, "2022-06-13")).toEqual(["bruce_forsyth"]);
  });
  test("returns empty array of users that have had over 100 mins screen time on the given date", () => {
    expect(getScreentimeAlertList(userScreenTimes, "2022-01-01")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("returns RGB value for given hex colour code", () => {
    expect(hexToRGB("#00FF00")).toEqual("rgb(0,255,0)");
    expect(hexToRGB("#808080")).toEqual("rgb(128,128,128)");
    expect(hexToRGB("#000000")).toEqual("rgb(0,0,0)");
    expect(hexToRGB("#FFFFFF")).toEqual("rgb(255,255,255)");

  });
});

describe("findWinner", () => {
  test("returns 0 when player 0 wins", () => {
    const test1 = [
      ["0", "0", "0"],
      ["X", null, null],
      ["X", null, null]
    ];
    expect(findWinner(test1)).toEqual("0");
    const test2 = [
      ["0", "X", "X"],
      ["0", "0", null],
      ["0", null, "X"]
    ];
    expect(findWinner(test2)).toEqual("0");
    const test3 = [
      ["0", "X", "0"],
      ["X", "0", "X"],
      ["X", null, "0"]
    ];
    expect(findWinner(test3)).toEqual("0");    

  });
  test("returns X when player X wins", () => {
    const test1 = [
      ["0", "0", "X"],
      ["0", "X", "X"],
      ["X", "0", "0"]
    ];
    expect(findWinner(test1)).toEqual("X");    
    const test2 = [
      ["X", "0", "X"],
      ["0", "0", "X"],
      ["0", "X", "X"]
    ];
    expect(findWinner(test2)).toEqual("X");      

  });  
  test("returns null when there is no winner", () => {
    const test1 = [
      ["0", "0", "X"],
      ["X", "X", "0"],
      ["0", "0", "X"]
    ];
    expect(findWinner(test1)).toEqual(null);  
    const test2 = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    expect(findWinner(test2)).toEqual(null);      
  });
});
