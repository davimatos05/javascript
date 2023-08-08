var date = new Date()
var hora = date.getHours()

console.log(`Agora são ${hora}hrs`)

if (hora < 7 ) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}