var numbers = []

function comparaValores(valorAtual, valorAnterior) {
    return valorAtual - valorAnterior
}

function adicionar() {
    var inputNumber = document.getElementById('inputNumber')
    var select = document.getElementById('select')
    var option = document.createElement('option')

    numbers.push(Number(inputNumber.value))
    select.appendChild(option)
    option.text = `Valor ${inputNumber.value} adicionado`

}


function finalizar() {
    var result = document.getElementById('result')
    var smallestNumber = numbers[0]
    var biggestNumber = numbers[numbers.length - 1]
    
    numbers.sort(comparaValores)
    result.innerText = `
        Ao todo, temos ${numbers.length} números cadastrados. 
        O menor valor informado foi ${smallestNumber}. 
        O maior valor informado foi ${biggestNumber}.
    `
}

