const sum = require("./Sum");

//TO GROUP SIMILAR TYPE OF TEST CASES
describe("example tests", () => {
  it("Should add 1 + 2 to equal to 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3); //toBe is matcher to match the result
  });

  it("Object assignment", () => {
    const obj = {};
    expect(obj).toEqual({}); //for object or array
  });
});

describe("truthy or false", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    //specific matcher
    expect(n).toBeNull();
    // expect(n).toBeUndefined();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  });

  it("Adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
});

describe("String", () => {
  it('there is no "I" in team', () => {
    expect("team").not.toMatch(/I/);
  });
});

//ARRAYS : TEST WHETHER ARRAY CONTAIN SPECIFIC VALUE
describe("Arrays", () => {
  const shoppingList = ["Apple", "Pineapple", "Pear", "Mango"];
  it("Array contain", () => {
    expect(shoppingList).toContain("Apple");
  });
});

function compileReactCode() {
  throw new Error("You installed wrong react version");
}
describe("exceptions", () => {
  it("Compiling android goes as expected", () => {
    expect(() => compileReactCode()).toThrow("You installed wrong react");
  });
});
