let usuario = "aluno";

switch(usuario){
    case "professor":
        console.log("Bem-vindo Professor, você tem acesso ao sistema limitado");
        break;
    case "administrador":
        console.log("Bem-vindo ADM. você tem acesso ilimitado ao sistema.");
        break;
    case "aluno":
        console.log("Bem-vindo Aluno, você pode acessar somente suas notas.");
        break;
    default:
        console.log("Invalid User!");
}