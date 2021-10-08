//Lets define some variables
let n1 = document.getElementById('number1');
let n2 = document.getElementById('number2');
let screenInput = document.getElementById('theScreen')

//Function on click

n1.onclick = writeScreen;
n2.onclick = writeScreen;


function writeScreen(num){
    screenInput.value = screenInput.value+num;
    console.log(num);
}

//Quick note 
//When using the buttons of the ui i need to cdhanges the input screen dir to write backwards
//but it you type manually it should work like a normal calculator