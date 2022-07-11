let btnVermelho = document.getElementById('vermelho');
let btnAzul = document.getElementById('azul');
let btnPreto = document.getElementById('preto');
let moto = document.getElementById('moto');

btnVermelho.onclick = function(){
    moto.style.backgroundImage = "url(/img/BMW1.png)";
} 

btnAzul.onclick = function(){
    moto.style.backgroundImage = "url(/img/BMW2.png)";
}

btnPreto.onclick = function(){
    moto.style.backgroundImage = "url(/img/BMW3.png)";
}