let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-select');
let vencedorSelecionado = document.getElementById('vencedor-select');

alterarJogador('X');

function escolherQuadrado(id){
    if (vencedor != null){
        return;
    }

    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML != '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";

    if(jogador == 'X') {
        jogador = 'O';
    }
    else {
        jogador = 'X';
    }

    alterarJogador(jogador);
    verificaVencedor();

}

function alterarJogador(valor){
   jogador = valor;
   jogadorSelecionado.innerHTML = jogador;
}

function verificaVencedor(){
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7');
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');

    if(verificaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        ganhador(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        ganhador(quadrado4);
        return;
    }

    if(verificaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        ganhador(quadrado7);
        return;
    }

    if(verificaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        ganhador(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        ganhador(quadrado2);
        return;
    }

    if(verificaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        ganhador(quadrado3);
        return;
    }

    if(verificaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        ganhador(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado1, quadrado3, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado3, quadrado7);
        ganhador(quadrado1);
        return;
    }

    if(verificaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        ganhador(quadrado3);
    }

}

function ganhador(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function verificaSequencia(quadrado1, quadrado2, quadrado3){
    let velha = false;
    if(quadrado1.innerHTML != '-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML){
        velha = true
    }
    
    return velha;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}