let peso = 90;
let altura = 1.70;

let calc = altura * altura;
let resultado = peso / calc;

if (resultado < 18.5){
    console.log(`Seu IMC é de ${resultado.toFixed(2)}. Está abaixo do peso.`);
} else if (resultado <= 24.9){
    console.log(`Seu IMC é de ${resultado.toFixed(2)}. Está normal.`);
} else if (resultado <= 29.9){
    console.log(`Seu IMC é de ${resultado.toFixed(2)}. Está com sobrepeso.`);
} else {
    console.log(`Seu IMC é de ${resultado.toFixed(2)}. Está obeso.`);
}