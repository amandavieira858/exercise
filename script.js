var numbers = []

function adicionar() {
    var inputNumber = document.getElementById('inputNumber')
    var select = document.getElementById('select')
    var option = document.createElement('option')

    numbers.push(inputNumber.value)
    numbers.sort()
    select.appendChild(option)
    option.text = `Valor ${inputNumber.value} adicionado`
}

function finalizar() {
    var result = document.getElementById('result')
    var smallestNumber = numbers[0]
    var biggestNumber = numbers[numbers.length - 1]

    result.innerText = `
        Ao todo, temos ${numbers.length} números cadastrados. 
        O menor valor informado foi ${smallestNumber}. 
        O maior valor informado foi ${biggestNumber}.
    `
}

