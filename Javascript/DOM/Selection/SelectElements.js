/**
 ** QuerySelector(selector): Return first matched element preset in DOM
 */

console.log(document.querySelector("div")); //returns first div element
console.log(document.querySelector(".intro")); //returns first div element which having class name as intro

//finding p tag which is inside .intro div
console.log(document.querySelector("div.intro p"));

//finding p tag but not in intro: returns p tag from parameters
//This will search for p tab which having parent parameter but not intro
console.log(document.querySelector("div.parameter:not(.intro) p"));

console.log('----------------------------------------');
/**
 ** QuerySelectorAll(selectors): Return all elements which  matched element preset in DOM
 ** returns NodeList
 */

const divPEle = document.querySelectorAll("div, p");
console.log("querySelectorAll('div, p')",divPEle);
console.log('Traversing using for of loop');
for(ele of divPEle) {
        console.log(ele);
}


//this querySelectorAll will return element which is not present inside select DOM which having outer as parent
const select = document.querySelector(".select");
const inner = select.querySelectorAll(".outer .inner");
console.log(inner);


//to make the scope related selection
const select1 = document.querySelector(".select");
const inner1 = select.querySelectorAll(":scope .outer .inner");
console.log("Scope selection ", inner1);


console.log('----------------------------------------');

//getElement by id : returns single item
const heading= document.getElementById('heading-text')
console.log(heading);

console.log('----------------------------------------');
//getElementsByClass: returns list of objects
 const classNode = document.getElementsByClassName('intro')
console.log(classNode);
//traverse using for of loop
for(let ele of classNode) 
        console.log(ele);
console.log('----------------------------------------');
//getElementsByTag: returns list of objects
const tagNodes = document.getElementsByTagName('div');
console.log(tagNodes)