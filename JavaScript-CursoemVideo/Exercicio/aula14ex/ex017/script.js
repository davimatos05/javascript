function tabuada() {
    let num = document.getElementsByTagName('input')[0]
    let frase = document.querySelector('output#res')
    frase.innerHTML = '<output> Tabuada! <br></output>'
    let tabuada = ''

    for (let divi = 0; divi <= 10; divi++) {
        let resul = num.value * divi
        frase.innerHTML += `${num.value} x ${divi} = ${resul}<br>` 

    }
}