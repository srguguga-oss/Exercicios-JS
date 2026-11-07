let compra = 856;

if (compra >= 500){
    let desconto = compra * 0.10;
    let result = compra - desconto;
    
    console.log(`Sua compra é de R$${compra}. Com desconto de 10% ficará: R$${result.toFixed(2)}`);
} else {
    console.log(`Você não tem desconto pois sua compra não passou de R$500`);
}