function addPara() {
        //create element
        var ele = document.createElement('p');
        //add the content
        ele.style.color='red';
        ele.innerHTML = "This is para added after pressing the button";
        document.body.appendChild(ele);
}

document.getElementById('button').onclick = changeContent;

function changeContent() {
        var ele = document.getElementById('button');
        ele.innerHTML = 'hello';
        ele.style.color = 'blue';
        ele.style.border = '2px solid black';

}

//change the content of the input text
function changeInput() {
        var ele = document.getElementById('box');
        console.log(ele.value);
        ele.value = ele.value.toUpperCase();
        ele.style.background = 'lightgray';
}

function changeButton() {
        ele = document.getElementById('button2');
        ele.innerHTML = "I am red button";
        ele.style.background ='red';

}

console.log(document.querySelector('#box'));
