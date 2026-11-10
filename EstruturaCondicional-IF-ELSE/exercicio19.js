let assinatura = "premium";

switch(assinatura){
    case "basico":
        console.log("Você tem o plano básico.");
        break;
    case "intermediario":
        console.log("Você tem o plano intermediário");
        break;
    case "premium":
        console.log("Você tem o plano premium");
        break;
    default:
        console.log("Classificação de plano incorreta!");
}