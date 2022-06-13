let prompt = require('prompt-sync')()

let nomePecas
let pesoPecas
let qtdPecas = 0

while (qtdPecas < 10){
    nomePecas = prompt("Insira o nome da peça: ")
    if (nomePecas.lenght < 3){      
        console.log("Nome inválido")
    } else {
        console.log("Nome propício")        
    }
    pesoPecas = prompt("insira o peso da peça: ")
    if (pesoPecas >= 100){
        console.log("Tamanho adequado")
    } else {
        console.log("Tamanho muito pequeno")
    }
    qtdPecas++
}