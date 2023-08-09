function idade() {
    let ano = document.getElementById('iano')
    let agora = new Date()
    let ano_atual = agora.getFullYear()
    let res = document.querySelector('p#res')

    if (ano.value.length == 0 || ano.value > ano_atual) {
        window.alert('[ERRO] O ano digitado encontra algum erro, confira e tente novamente!')
    } else {
        let fsexo = document.getElementsByName('sexo')
        let idade = ano_atual - Number(ano.value)
        let genero = ''

        if (fsexo[0].checked) {
            genero = 'Homem'
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `É um ${genero} com ${idade} anos!`
    }
}