let opcao = 1;
let temp = 26;


switch(opcao){
    case 1:
        let resultF = (temp * 1.8) + 32;
        console.log(`Convertendo para F° é: ${resultF.toFixed(1)}`);
        break;
    case 2:
        let resultC = (temp - 32) / 1.8;
        console.log(`Convertendo para C° é: ${resultC.toFixed(1)}`);
        break;
    default:
        console.log(`Opção inválida.`);
}