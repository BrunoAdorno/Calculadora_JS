let expressao = '';
let resultadoExibido = false;

function inserirNumero(numero) {
    if (resultadoExibido) {
        limpar();
        resultadoExibido = false;
    }
    expressao += numero;
    atualizarResultado();
}

function inserirOperador(operador) {
    if (resultadoExibido) {
        resultadoExibido = false;
    }
    expressao += operador;
    atualizarResultado();
}

function inserirDecimal() {
    if (resultadoExibido) {
        limpar();
        resultadoExibido = false;
    }
    if (expressao === '' || expressao.slice(-1) === '+' || expressao.slice(-1) === '-' || expressao.slice(-1) === '*' || expressao.slice(-1) === '/') {
        expressao += '0.';
    } else if (!expressao.includes('.')) {
        expressao += '.';
    }
    atualizarResultado();
}

function calcularResultado() {
    try {
        const resultado = eval(expressao);
        expressao = resultado.toString();
        resultadoExibido = true;
        atualizarResultado();
    } catch (error) {
        expressao = 'Erro';
        resultadoExibido = true;
        atualizarResultado();
    }
}

function limpar() {
    expressao = '';
    atualizarResultado();
}

function memoriaRecall() {
}

function memoriaSubtrair() {
}

function memoriaSomar() {
}

function atualizarResultado() {
    document.getElementById('resultado').textContent = expressao;
}