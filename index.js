document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "1":
            display.value += '1';
          break;
        case "3":
            display.value += '3';
        break;
        case "2":
            display.value += '2';
        break;
        case "4":
            display.value += '4';
        break;
        case "5":
            display.value += '5';
        break;
        case "6":
            display.value += '6';
        break;
        case "7":
            display.value += '7';
        break;
        case "8":
            display.value += '8';
        break;
        case "9":
            display.value += '9';
        break;
        case "0":
            display.value += '0';
        break;
        case "+":
            display.value += '+';
        break;
        case "-":
            display.value += '-';
        break;
        case "/":
            display.value += '/';
        break;
        case "*":
            display.value += '*';
        break;
        case "Enter":
            calculate();
        break;
        

        default:
          return; // Quit when this doesn't handle the key event.
}});

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
    
}


