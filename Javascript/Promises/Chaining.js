function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved after 2 msec"), 2000);
  });
}

function catchPromise() {
  return new Promise(async (resolve, reject)=>{
        console.log("Before getPromiseCall");
        const promise = await getPromise();           //executer will not stop here to get response back 
        //so here we can use async await or attach callbacks
        console.log("After getPromiseCall()", promise);
        resolve(promise)
  });
}
// promise.then((success, error) => console.log(success, error));

const promise=catchPromise();
console.log(promise);
//Now here we can attach functions 

promise.then(success=>console.log(success))