let prompt = require('prompt-sync')()

let dataEvento

let qtdPessoas = 98

console.log("Ola! Bem vindo ao sistema de cadastro de eventos, para começar")

let data = new Date()
let dia = data.getDate()
let mes = (data.getMonth() + 1)
let ano = data.getFullYear()

let idade = prompt('Qual a sua idade? ')

function listaPalestrantes() {
    return "Palestrantes:\n- Gilberto Gil\n- Rubens Sostenes"
  }

while(true){
    if (parseInt(idade) >= 18){

        while (qtdPessoas < 100){
        
            let anoEvento = prompt("Qual o ano do evento? ")
            if(parseInt(anoEvento) == ano) {
            let mesEvento = prompt("Qual o mes do evento? ")
            if(parseInt(mesEvento) == mes) {
                let diaEvento = prompt("Qual o dia do evento? ")
                if(parseInt(diaEvento) == dia) {
                console.log("O evento acontecera no dia de hoje")
                console.log(listaPalestrantes())
                } else if(parseInt(diaEvento) > dia) {
                console.log("O evento ira ocorrer")
                console.log(listaPalestrantes())
                } else {
                console.log("O evento ja aconteceu")
                }
            } else if(parseInt(mesEvento) > mes) {
                console.log("O evento ira ocorrer")
                console.log(listaPalestrantes())
            } else {
                console.log("O evento ja aconteceu")
            }
            } else if(parseInt(anoEvento) > ano) {
            console.log("O evento ira ocorrer")
            console.log(listaPalestrantes())
            } else {
            console.log("O evento ja aconteceu")
            }
            qtdPessoas++
        }
    } else{
        console.log("Não permitir cadastro")
        break
    }
}