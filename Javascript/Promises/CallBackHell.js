/**
 * Callback hell: Pyramid of callback
 */

setTimeout(() => {
  console.log("Hello Dear");
  setTimeout(() => {
    console.log("Hello Dear");
    setTimeout(() => {
      console.log("Hello Dear");
    },2000);
  },2000);
},2000);




