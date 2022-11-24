let obj = {
  name: "Kajal",
  age: "23",
  height: "5.5",
};

console.log("FOR...IN loop");
for (let data in obj) {
  // console.log(data);
  console.log(obj[data]);
}

console.log("\nFOR...OF loop");
const arr = [3, 5, 7];
arr.foo = "Hello";
console.log("Iterable array is, ", arr);
console.log("For In loop on array returns keys or propery names");
for (let data in arr) {
  console.log(data);
}

console.log("\nFor OF loop on array returns values");
for (let data of arr) {
  console.log(data);
}
