let listaPessoas = ["Pedrinho", "Rubens", "Sóstenes", "Tony", "Ricardo", "Patricia", "Francieli"]

for(let numero = 0; numero < listaPessoas.length; numero++) {
    if(numero == 0) {
        console.log("O numero do aluno é zero")
    } else if (numero % 2 == 0) {
        console.log(`o numero do aluno ${numero} é PAR`)
    } else if (numero % 2 == 1) {
        console.log(`o numero do aluno ${numero} é IMPAR`)
    }
}