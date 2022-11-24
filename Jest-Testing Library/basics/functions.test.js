const functions = require("./functions");

it("add 2 + 2 should be 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Is null ? ", () => {
  expect(functions.isNull()).toBeNull();
});

//toEqual Method
test("Objects are similar ? ", () => {
  expect(functions.getObject()).toEqual({ name: "kajal", age: 23 });
});

//TRUTHY VALUES
test("is this value truthy ? ", () => {
  expect(functions.getTruthy()).toBeTruthy();
});
test("is this value false ? ", () => {
  expect(functions.getFalsy()).toBeFalsy();
});

//NUMBER MATCHERS
test(" 2 + 5 > 6 ? ", () => {
  expect(functions.add(2, 5)).toBeGreaterThan(6);
});

//CONTAINS
test("This array does not contain 100", () => {
  expect(functions.numbersArr()).not.toContain(100);
});

//String
test("Does this 'ok' string contain k ", () => {
  expect("ok").toContain("k");
});

//nested object
test("Objects are similar ? ", () => {
  expect([{ name: "kajal", age: 23 }]).toEqual([{ name: "kajal" }]);
});

//nested object
test("Does this array contain object ", () => {
  expect([{ name: "kajal", age: 23 }]).toContainEqual({
    name: "kajal",
    age: 23,
  });
});
