let currentNumber = 0;
let previousNumber = 0;
let operator = "|";

function main(){
    displayResult();
}

function clean(){
    return currentNumber = 0,
    previousNumber = 0,
    operator = "|",
    displayResult();
}

function negative(){
    return currentNumber = currentNumber * -1,
    displayResult();
}

function percent(){
    return currentNumber = (currentNumber * previousNumber) / 100,
    displayResult();
}

function divided(){
    return currentNumber = previousNumber / currentNumber,
    displayResult();
}

function multiply(){
    return currentNumber = previousNumber * currentNumber,
    displayResult();
}

function minus(){
    return currentNumber = previousNumber - currentNumber,
    displayResult();
}

function plus(){
    return currentNumber = previousNumber + currentNumber,
    displayResult();
}

//Set button

function setOne(){
    return currentNumber = currentNumber + "1",
    removeZero(), displayResult();
}

function setTwo(){
    return currentNumber = currentNumber + "2",
    removeZero(), displayResult();
}

function setThree(){
    return currentNumber = currentNumber + "3",
    removeZero(), displayResult();
}

function setFour(){
    return currentNumber = currentNumber + "4",
    removeZero(), displayResult();
}

function setFive(){
    return currentNumber = currentNumber + "5",
    removeZero(), displayResult();
}

function setSix(){
    return currentNumber = currentNumber + "6",
    removeZero(), displayResult();
}

function setSeven(){
    return currentNumber = currentNumber + "7",
    removeZero(), displayResult();
}

function setEigth(){
    return currentNumber = currentNumber + "8",
    removeZero(), displayResult();
}

function setNine(){
    return currentNumber = currentNumber + "9",
    removeZero(), displayResult();
}

function setZero(){
    return currentNumber = currentNumber + "0",
    displayResult();
}

function setComma(){
    return currentNumber = currentNumber + ".",
    displayResult();
}

//

function setOperator(char){
    return operator = char;
}

function setPreviousNumber(){
    return previousNumber = +currentNumber, currentNumber = 0,
    displayResult();
}

function setOperatorPercent(){
    setPreviousNumber();
    setOperator("%");
    displayResult();
}

function setOperatorDivided(){
    setPreviousNumber();
    setOperator("/");
    displayResult();
}

function setOperatorMultiply(){
    setPreviousNumber();
    setOperator("*");
    displayResult();
}

function setOperatorMinus(){
    setPreviousNumber();
    setOperator("-");
    displayResult();
}

function setOperatorPlus(){
    setPreviousNumber();
    setOperator("+");
    displayResult();
}

function equal(){
    if (operator == "%"){
        percent();
        removePreviousNumber();
        resetOperator();
    } else if(operator == "/"){
        divided();
        removePreviousNumber();
        resetOperator();
    } else if(operator == "*"){
        multiply();
        removePreviousNumber();
        resetOperator();
    } else if(operator == "-"){
        minus();
        removePreviousNumber();
        resetOperator();
    } else if(operator == "+"){
        plus();
        removePreviousNumber();
        resetOperator();
    }
}

function removePreviousNumber(){
    previousNumber = 0;
    displayResult();
}

function resetOperator(){
    operator = "|";
    displayResult();
}

function removeZero(){
    for(let i = 0; i < 2; i++){
        negative();
    }
}

function displayResult(){
    document.querySelector("#result").innerHTML = currentNumber;
    document.querySelector("#previousNumber").innerHTML = previousNumber + " " + operator + " " + currentNumber;
}

main();