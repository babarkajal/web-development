// PRINT ALL PRIME NUMBER FROM USER ENTERED RANGE
function showPrimeNumbers() {
  const start = +document.getElementById("start").value;
  const end = +document.getElementById("end").value;
  console.log(start, end);
  for (let i = start; i <= end; i++) {
    const ele = i;
    let isPrime = true;
    for (let j = 2; j <= Math.floor(ele / 2); j++) {
      //IF OTHER THAN 1 AND THAT NUMBER DIVIDES ELE THEN THAT IS NOT PRIME NUMBER
      if (ele % j === 0) isPrime = false;
    }
    if (isPrime) console.log(ele + " is prime number");
  }
}
