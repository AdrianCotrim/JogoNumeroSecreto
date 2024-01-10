function verificaValorValido(chute){
    const numero = +chute

    if (chuteForValido(numero)) {
        if(chute === 'game over'){
            document.body.innerHTML = `
            <h2>Game Over</h2>
            <button id="jogar-novamente" class="btn-gameover">Jogar Novamente</button>
            `
            document.body.classList.add("gameover")
        }else{
            elementoChute.innerHTML += '<div>Valor inválido.</div>'
            return
    }
    }

    if(numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `Valor inválido: o número secreto precisa estar entre 
        ${maiorValor} ou ${menorValor}`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}



function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForValido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente')
    window.location.reload()
})