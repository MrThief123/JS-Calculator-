document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "Enter":
            calculate();
            break;
        default:
            if ("0123456789+-/*".includes(event.key)) {
                display.value += event.key;
            }
            break;
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


