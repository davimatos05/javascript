function count() {
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pass = document.querySelector('input#pass')
    let res = document.querySelector('p#res')
    res.innerHTML = 'Valores: <br>'

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 || pass.value == 0 ) {
        window.alert('[ERRO] Informação invalida,Por Favor tente novamente!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} -> `
            }

            res.innerHTML += 'FIM'
        } else {
            for (c = f; c <= i; c += p) {
                res.innerHTML += `${c} -> `
            }

            res.innerHTML += 'FIM'
        }
    }
    
}