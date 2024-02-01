let listaNumeroSorteados = [];
let quantidadeLimiteNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNomeTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextosIniciais();

function verificarChute(){
let chute = document.querySelector('input').value;
if (chute == numeroSecreto){
    document.getElementById('reiniciar').removeAttribute('disabled');
    exibirNomeTela ('h1', 'Acertou!');
    let numeroTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    let exibirTentativa = `Parabéns, você descobriu o número secreto com ${tentativas} ${numeroTentativa}`
    exibirNomeTela('p', exibirTentativa);
}else if(chute < numeroSecreto){
    exibirNomeTela ('p', 'o número secreto é maior');
}else{
    exibirNomeTela ('p', 'o número secreto é menor');
}
tentativas ++; 
limparBuffer();
}
function exibirTextosIniciais() {
    let exibirMensagemNumeroLimite = `digite um número de 1 a ${quantidadeLimiteNumeros}`;
    exibirNomeTela('h1','Jogo do número secreto');
    exibirNomeTela('p', exibirMensagemNumeroLimite);
}
function limparBuffer() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random() * quantidadeLimiteNumeros +1);
    let tamanhoLista = listaNumeroSorteados.length;
    if(tamanhoLista == quantidadeLimiteNumeros){
        listaNumeroSorteados = [];
    }
        if(listaNumeroSorteados.includes(numeroEscolhido)){
           return gerarNumeroAleatorio();
        }else{
            listaNumeroSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparBuffer();
    tentativas = 1;
    exibirTextosIniciais();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}