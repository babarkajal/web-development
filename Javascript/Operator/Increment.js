i = 6;
a = i++ + ++i;
console.log(a); //14

i = 8;
a = ++i + i++;
//   = 9 + 9
console.log(i, a); ///10 18

i = 8;
a = ++i + ++i + ++i;
console.log(i, a); //11 30
