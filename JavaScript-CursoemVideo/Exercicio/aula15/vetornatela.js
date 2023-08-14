let valores = [1,31,2,3,4,5,7,5,4,3,23,12,123]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`O valor da posição ${pos} é ${valores[pos]}`)
// }

for (let pos in valores) {
    console.log(valores[pos])
}
