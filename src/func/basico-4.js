function ultima(){
    console.log('Ultima Função')
}

function terceira(){
    console.log('Inicio da terceira função')
    ultima()
    console.log('Fim da terceira função')
}

function segunda(){
    console.log('Inicio da segunda função')
    terceira()
    console.log('Fim da segunda função')
}

function primeira(){
    console.log('Inicio da primeira função')
    segunda()
    console.log('Fim da primeira função')
}

primeira()
