function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved after 2 msec"), 2000);
    // setTimeout(()=>reject('Rejected after 2 msec'),2000);
  });
}

const promise = getPromise();
console.log(promise);
promise.then((success, error) => console.log(success, error));
