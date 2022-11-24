/*
	_ _ _ * 
	_ _ * * * 
	_ * * * * * 
	* * * * * * * 

*/

let ls = 3;
for (let i = 0; i <= 3; i++) {
  str = "";
  for (let j = 0; j <= ls; j++) {
    if (i + j < 3) str = str + "  ";
    else str = str + "* ";
  }
  ls++;
  console.log(str);
}
