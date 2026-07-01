let resposta = document.getElementById('resposta')

function principal(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultado = num1 + num2
    resposta.innerHTML = ''
    resposta.innerHTML += `A soma dos dois números é: ${resultado.toFixed(2)}`
    resposta.style.fontSize = '2rem'
}