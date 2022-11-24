// add values to the text area
function addToText(num) {
        var inputArea = document.getElementById('input-id');
        var prevValue = inputArea.value;
        inputArea.value = prevValue + num;
}
/* -------------------------------------- function for num button ---------------------------------------*/
//function for button 1
function addToInput1() {
        var ele = document.getElementById('one');
        var value = ele.value;
        addToText(value);
}
//function for button 2
function addToInput2() {
        var ele = document.getElementById('two');
        var val = ele.value;
        addToText(val);
}

//function for button 3
function addToInput3() {
        var ele = document.getElementById('three');
        var val = ele.value;
        addToText(val);
}

//function for button 4
function addToInput4() {
        var ele = document.getElementById('four');
        var val = ele.value;
        addToText(val);
}

//function for button 5
function addToInput5() {
        var ele = document.getElementById('five');
        var val = ele.value;
        addToText(val);
}

//function for button 6
function addToInput6() {
        var ele = document.getElementById('six');
        var val = ele.value;
        addToText(val);
}

//function for button 7
function addToInput7() {
        var ele = document.getElementById('seven');
        var val = ele.value;
        addToText(val);
}

//function for button 8
function addToInput8() {
        var ele = document.getElementById('eight');
        var val = ele.value;
        addToText(val);
}

//function for button 9
function addToInput9() {
        var ele = document.getElementById('nine');
        var val = ele.value;
        addToText(val);
}

//function for button 0
function addToInput0() {
        var ele = document.getElementById('zero');
        var val = ele.value;
        addToText(val);
}


/* ---------------------------- Functions for operators ---------------------------------*/
//function for button +
function addToInputPlus() {
        var ele = document.getElementById('plus');
        var val = ele.value;
        addToText(val);
}

//function for button -
function addToInputMin() {
        var ele = document.getElementById('min');
        var val = ele.value;
        addToText(val);
}

//function for button *
function addToInputMul() {
        var ele = document.getElementById('mul');
        var val = ele.value;
        addToText(val);
}

//function for button /
function addToInputDiv() {
        var ele = document.getElementById('div');
        var val = ele.value;
        addToText(val);
}


/* ------------------------------------- Functions for cancel and return button --------------------------------*/
function backspace() {
        var inputArea = document.getElementById('input-id');
        var value = inputArea.value;
        value = value.substring(0,value.length-1);
        inputArea.value = value;
}

function clearText() {
        document.getElementById('input-id').value='';
}

/* -------------------------------------- Function for equal button--------------------------------------------------*/
function calculate() {
        var expression = document.getElementById('input-id').value;

        try {
                document.getElementById('input-id').value= eval(expression);
        }catch(err) {
                alert('Expression is wrong! Please check it!');
        }
}
