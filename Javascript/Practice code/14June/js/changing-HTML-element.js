//select the HTML elemnet using ID
var ele = document.getElementById('change-content');
//print that text
console.log(ele.innerHTML);
//chage the text
ele.innerHTML = "This is paragraph changed using js";

//select second para using getElementByTagName and change the style using property background
ele = document.getElementsByTagName('p'); //is this page there are two p tag so this returns all the para elements
console.log(ele);

//for selecting tag we can use index
console.log(ele[1].innerText)
//change the style
ele[1].style.background = 'lightblue';
ele[1].style.color = 'red';

//add the attribute for div tag
ele = document.getElementsByTagName('div');
//first see whether any attribute is present or not
console.log(ele[0]);
ele[0].setAttribute('id', 'id-added');
console.log(ele[0]);
ele[0].setAttribute('style', 'border: 1px solid black; text-align: center');
