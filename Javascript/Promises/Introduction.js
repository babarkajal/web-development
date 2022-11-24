/**
 * *A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * Promise helps use to attach callbacks instead of passing them to the function
 * promise returns object which can be then resolved to success or error
 */

const promiseObject = new Promise((resolve, reject) => {
  console.log("Promise initiated");
//   resolve("This is resolved");
  reject(new Error('Something is wrong here'))
}).then((success) => {
  console.log("Hey,", success);
}).catch(err=>{
        console.log("This is error, ", err)
}).then(()=>{
        console.log("No matter what this gonna happen")
})
