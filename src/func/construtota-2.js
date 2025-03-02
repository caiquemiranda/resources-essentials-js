function Contador(valorInicial){

    this.numero = valorInicial

    this.incrementar = function(){
        this.numero++
    }

    this.decrementar = function(){
        this.numero--
    }
}

const contador1 = new Contador(1000)
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.decrementar()
contador1.decrementar()
console.log(contador1.numero)

const contador2 = new Contador(10)
contador2.incrementar()
contador2.incrementar()
contador2.decrementar()
console.log(contador2.numero)
