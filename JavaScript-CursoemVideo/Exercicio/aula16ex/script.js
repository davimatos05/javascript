let numbers = []
let num = document.querySelector('input#inum') 
let button = document.querySelector('button#button')

function adicionar() {
    if (num.value > 100 || num.value < 1 || num.value.length == 0 || numbers.indexOf(num.value) != -1) {
        alert('Valor Invalido!');
    } else {
        let res = document.querySelector('output#res');
                
        numbers.push(num.value);
                
        res.innerHTML = `<p> Valor ${num.value} Adicionado!`;

        num.value = '';
        num.focus()

    };
}


function total() {
    res.innerHTML = `<p>Temos no Total ${numbers.length} números cadastrados!<br>`;
};
            
function maior () {
    let maior_num = 0;
    for (let pos = 0; pos <= numbers.length; pos++) {
        let atual = Number(numbers[pos])
        if (atual > maior_num) {
            maior_num = atual
        } else {

        }
    }
    res.innerHTML += `<p> O maior Valor é ${maior_num}! <br>`;
};
            
function menor() {
    let menor_num = num.value;
    for (let pos = 0; pos <= numbers.length; pos++) {
        let atual = Number(numbers[pos])
        if (atual < menor_num) {
            menor_num = atual
        } else {

        }
    }
    res.innerHTML += `<p> O menor valor é ${menor_num}!<br>`;
            
};
            
function soma () {
    let soma = 0;
    for (let pos in numbers) {
        soma += numbers[pos]
    }
    res.innerHTML += `<p> A somas dos valores é ${soma}! <br>`;
};
            
function media () {
    let mediaa = 0;
    for (let pos in numbers) {
        mediaa += numbers[pos]
    }
    let media = mediaa / numbers.length
    res.innerHTML += `<p> A media entre os valores é ${media}! <br>`;
};
