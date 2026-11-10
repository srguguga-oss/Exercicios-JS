//Decidi usar forEach nesse exercício.

let menu = [
    {nome: "Café", preco: 10},
    {nome: "Chá", preco: 12},
    {nome: "Suco", preco: 15},
    {nome: "Água", preco: 4.50}
];

console.log("Maquiná de bebidas. Bebidas disponivéis:");

menu.forEach((maquinabebidas) => {
    console.log(`${maquinabebidas.nome} | R$${maquinabebidas.preco}`);
});

let escolha = "Água";

console.log("__________________________________");

switch(escolha){
    case "Café":
        console.log(`Você escolheu: ${menu[0].nome}. O total ficará: R$ ${menu[0].preco}`);
        break;
    case "Chá":
        console.log(`Você escolheu: ${menu[1].nome}. O total ficará: R$ ${menu[1].preco}`);
        break;
    case "Suco":
        console.log(`Você escolheu: ${menu[2].nome}. O total ficará: R$ ${menu[2].preco}`);
        break;
    case "Água":
        console.log(`Você escolheu: ${menu[3].nome}. O total ficará: R$ ${menu[3].preco}`);
        break;
    default:
        console.log("Opção invalida!");
    }