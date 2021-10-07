//Lets define some variables
let n1 = document.getElementById('number1');
let n2 = document.getElementById('number2');
let screenInput = document.getElementById('theScreen')

//Function on click

n1.onclick = writeScreen('1');
n2.onclick = writeScreen('2');

function writeScreen(num){
    screenInput.value = screenInput.value+num;
    console.log(num);
}