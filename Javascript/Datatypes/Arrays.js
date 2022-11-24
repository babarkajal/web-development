const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

//Find length
console.log(shopping.length); //5

//Finding items
console.log(shopping.indexOf("milk"));

//Adding items in array
shopping.push("Pizza");
console.log(shopping);

//Adding item at start
shopping.unshift("Burger", "Panner");
console.log(shopping);

//Remove item
console.log(shopping.pop());
console.log(shopping);

//remove first item
console.log(shopping.shift(2));

//Splice method to add and delete items
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
const arr = [10, 20, 30, 40];
console.log(arr.splice(2)); //returns array from 2 [30,40]
console.log(arr); //[10,20]
console.log(arr.splice(-1)); //returns array end -1 [40]
console.log(arr); //[10,20,30]

const arr = [10, 20, 30, 40];
console.log(arr.splice(2, 1)); //[30]  delete 2 item from 2 index
console.log(arr); //[10,20,40]

arr.splice(3, 0, 30, 40); //inserts 30,40 at index 3 because delete count is 0
console.log(arr); //[10,20,40,30,40]

//Print array using for..of statement
for (let a of arr) console.log(a);

//Filter on array
arr = [1, 2, 5, 4, 8, 3];
arr.filter((a) => {
  return a % 2 == 0;
});

arr.filter((a) => a % 2 != 0); // [1,5,3]

//here we get output as [2,4,8] because only this elements pass the test provided by callbackFn
