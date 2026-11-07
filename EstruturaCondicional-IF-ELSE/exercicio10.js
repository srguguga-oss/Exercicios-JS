let compra = 99;

if (compra <= 199.99){
    let frete15 = compra - 15;
    console.log(`O frete vai ser de R$15. Total ficará: R$${frete15}`);
} else if (compra <= 100){
    let frete25 = compra - 25;
    console.log(`O frete vai ser de R$25. Total ficará: R$${frete25}`)
} else {
    console.log(`Você tem frete grátis`);
}