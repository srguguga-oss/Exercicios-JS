let n1 = 5;
let n2 = 10;

let operacao = "*";

switch(operacao){
    case "+":
        console.log(`A operação usando ${operacao} é de: ${n1 + n2}.`);
        break;
    case "-":
        console.log(`A operação usando ${operacao} é de: ${n1 - n2}.`);
        break;
    case "*":
        console.log(`A operação usando ${operacao} é de: ${n1 * n2}.`);
        break;
    default:
        console.log(`Operação invalida!`);
}