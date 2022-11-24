 // add element using js -->
var ele = document.createElement('h2');
ele.innerHTML ='This h2 tag added by using js';
document.body.appendChild(ele);

//remove the para
function remove() {
        ele = document.getElementById('div-tag');
        ele.removeChild(ele.childNodes[1]);
}
//this content is added using write function
document.write('<h3>This is h3 heading added using write function</h3>');
