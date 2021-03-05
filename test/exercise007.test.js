const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("throws an error with no input", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("check valid condition: ex: 123 and returns the sum of all its digits, e.g 6 in this example", () => {
    const result = sumDigits(123);
    const expected = 6;
    expect(result).toEqual(expected);
  });
});

describe("createRange", () => {
  test("throws an error with no input", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required" || "end is required");
  });

  test("if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]", () => {
    const result = createRange(3, 11, 2);
    const expected = [3, 5, 7, 9, 11];
    expect(result).toEqual(expected);
  });
});

describe("getScreentimeAlertList", () => {
  test("throws an error with no input", () => {
    let users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");

    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });

  test("throws an error with no input", () => {
    let users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");

    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });

  test("users who have used more than 100 minutes of screentime for a given date", () => {
    let users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    let result = getScreentimeAlertList(users, "2019-06-11");
    let expected = [];
    expect(result).toEqual(expected);

    result = getScreentimeAlertList(users, "2019-05-02");
    expected = ["beth_1234"];
    expect(result).toEqual(expected);
  });
});

describe("hexToRGB", () => {
  test("throws an error with no input", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
  });

  test("returns format of RGB of following: rgb(255,17,51)", () => {
    const result = hexToRGB("#FF1133");
    const expected = "rgb(255,17,51)";
    expect(result).toEqual(expected);
  });
});

describe("findWinner", () => {
  test("throws an error with no input", () => {
    expect(() => {
      findWinner();
    }).toThrow("board is required");
  });
});
