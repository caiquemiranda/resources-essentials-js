const gritar = function (texto) {
    return texto.toUpperCase()
}

const exagerar = (texto) => texto + "!!!!"

console.log(gritar('olá'))
console.log(exagerar(gritar('olá')))

