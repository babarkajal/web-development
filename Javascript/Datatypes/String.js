let str = "This is sample string";

//At() function
console.log(str.at(3)); //s
console.log(str.at(-1)); //g
console.log(str.at(21)); //undefined

//charAt function
console.log(str.charAt(3)); //s
console.log(str.charAt()); //T  default is 0
console.log(str.charAt(-1)); //<empty string>
console.log(str.charAt(21)); //<empty string>

//charCodeAt() -> return 0-65353
console.log(str.charCodeAt(4)); //32
console.log(str.charCodeAt(-4)); //NaN
console.log(str.charCodeAt(9)); //97

//concat()=>join strings
console.log(str.concat(" ", " for string concatenation"));
console.log(str.concat(new String("THis is string")));

//includes() checks whether string is present as substring
console.log(str.includes("is")); //true
console.log(str.includes("is", 3)); //true
console.log(str.includes("is", 6)); //false

//localCompare: compare string based on sorting
// return -1: str1 comes before str2
// return 1: str1 comes after str2
// return 0: str1 equal str2
console.log("a".localeCompare("c")); //-1
console.log("p".localeCompare("b")); //1
console.log("Abc".localeCompare("abc", { sensitivity: "base" })); // 1
