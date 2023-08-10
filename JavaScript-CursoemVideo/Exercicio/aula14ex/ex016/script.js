function count() {
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pass = document.querySelector('input#pass')

    if (ini.value.length == 0 || pass.value == 0 ) {
        window.alert('[ERRO] Informação invalida,Por Favor tente novamente!')
    } else {
        let num = ini
        let frase = document.getElementById('res')
        frase.innerHTML = `Valores: <br>`

        for (let num = ini.value; num <= fim.value; num += pass.value) {
            console.log(num)
        }
    }
}