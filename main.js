let numeroAnterior = 0;
let numeroAtual = 0;
let operador = '|';

function main(){
    exibeResultado();
}

//Operadores

function limpar(){
    return numeroAtual = 0 , numeroAnterior = 0 , operador = '|', exibeResultado();
}

function inverterSinal(){
    return numeroAtual = numeroAtual * -1, exibeResultado();
}

function porcentagem(){
    return numeroAtual = (numeroAtual * numeroAnterior) / 100, exibeResultado();
}

function dividir(){
    return numeroAtual = numeroAnterior / numeroAtual, exibeResultado();
}

function multiplicar(){
    return numeroAtual = numeroAnterior * numeroAtual, exibeResultado();
}

function subtrair(){
    return numeroAtual = numeroAnterior - numeroAtual, exibeResultado();
}

function somar(){
    return numeroAtual = numeroAnterior + numeroAtual, exibeResultado();
}

//Botões contendo os números

function setUm(){
    return numeroAtual = numeroAtual + '1', removeZero(), exibeResultado();
}

function setDois(){
    return numeroAtual = numeroAtual + '2', removeZero(), exibeResultado();
}

function setTres(){
    return numeroAtual = numeroAtual + '3', removeZero(), exibeResultado();
}

function setQuatro(){
    return numeroAtual = numeroAtual + '4', removeZero(), exibeResultado();
}

function setCinco(){
    return numeroAtual = numeroAtual + '5', removeZero(), exibeResultado();
}

function setSeis(){
    return numeroAtual = numeroAtual + '6', removeZero(), exibeResultado();
}

function setSete(){
    return numeroAtual = numeroAtual + '7', removeZero(), exibeResultado();
}

function setOito(){
    return numeroAtual = numeroAtual + '8', removeZero(), exibeResultado();
}

function setNove(){
    return numeroAtual = numeroAtual + '9', removeZero(), exibeResultado();
}

function setZero(){
    return numeroAtual = numeroAtual + '0', exibeResultado();
}

function setVirgula(){
    return numeroAtual = numeroAtual + '.', exibeResultado();
}

//Define as variáveis

function setOperador(sinal){
    return operador = sinal;
}

function setNumeroAnterior(){
    return numeroAnterior = +numeroAtual, numeroAtual = 0, exibeResultado();
}

function setOperadorPorcentagem(){
    setNumeroAnterior();
    setOperador('%');
    exibeResultado();
}

function setOperadorDividir(){
    setNumeroAnterior();
    setOperador('/');
    exibeResultado();
}

function setOperadorMultiplicar(){
    setNumeroAnterior();
    setOperador('*');
    exibeResultado();
}

function setOperadorSubtrair(){
    setNumeroAnterior();
    setOperador('-');
    exibeResultado();
}

function setOperadorSomar(){
    setNumeroAnterior();
    setOperador('+');
    exibeResultado();
}

function resultado(){
    if (operador == '%'){
        porcentagem();
        removeNumeroAnterior();
        resetOperador()
    } else if(operador == '/'){
        dividir();
        removeNumeroAnterior();
        resetOperador()
    } else if(operador == '*'){
        multiplicar();
        removeNumeroAnterior();
        resetOperador()
    } else if(operador == '-'){
        subtrair();
        removeNumeroAnterior();
        resetOperador()
    } else if(operador == '+'){
        somar();
        removeNumeroAnterior();
        resetOperador()
    }
}

function removeNumeroAnterior(){
    numeroAnterior = 0;
    exibeResultado();
}

function resetOperador(){
    operador = '|';
    exibeResultado();
}

function removeZero(){
    for(let i = 0; i < 2; i++){
        inverterSinal();
    }
}

function exibeResultado(){
    document.querySelector("#resultado").innerHTML = numeroAtual;
    document.querySelector("#numeroAnterior").innerHTML = numeroAnterior + " " + operador + " " + numeroAtual;
}

main();
