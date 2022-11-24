function getJob(degree) {
  new Promise((resolve, reject) => {
    if (degree) resolve("Hey, I got job :)");
    else reject("No job :(");
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .then(() =>
      console.log("No matter I get a job or not, I gonna study hard")
    );
}

getJob(false)
getJob(true)
