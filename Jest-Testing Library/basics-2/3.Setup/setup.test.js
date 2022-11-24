let animals = ["elephant", "zebra", "bear", "tiger"];
/* 
beforeAll(() => {
  console.log("BEFORE ALL TEST CASE EXECUTION");
});

//IT RUNS FOR EACH AND EVERY TEXT CASE AND INITIALIZES IT
beforeEach(() => {
  console.log("BEFORE EACH");
  animals = ["elephant", "zebra", "bear", "tiger"];
});

//EXECUTED AFTER EACH TEST CASE
afterEach(() => {
  console.log("AFTER EACH");
});

afterAll(() => {
  console.log("AFTER ALL ");
}); */

//TEST CASE
describe("animals array", () => {
  beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ["elephant", "zebra", "bear", "tiger"];
  });
  it("should add animal to the end of an array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to the shart of an array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
