function inserir(num) {
    let numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function limpar(num) {
    document.getElementById('visor').innerHTML = num;
}

function calcular() {
    let calculo = document.getElementById('visor').innerHTML;
    if (calculo) {
        document.getElementById('visor').innerHTML = eval(calculo);
    } else {
        document.getElementById('visor').innerHTML = '';
    }
}