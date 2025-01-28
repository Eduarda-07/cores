// let - mutavel
// const - imutavel

// use strict -> verificar erros, garantir que estaja nas novas normas
"use strict"

const botaoTrocarCor = document.getElementById('trocar-cor')


function trocarCor () {
    const cor = document.getElementById('cor').value
    
    document.documentElement.style.setProperty('--cor-fundo', cor)
}
botaoTrocarCor.addEventListener('click', trocarCor)