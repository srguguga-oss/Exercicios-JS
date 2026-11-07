let notaAluno = 2.9;

if (notaAluno <= 5){
    console.log(`A nota do aluno é insuficiente.`);
} else if (notaAluno <= 6.9) {
    console.log(`O aluno está de recuperação.`);
} else if (notaAluno <= 8.9){
    console.log(`O aluno está de aprovado!`);
} else {
    console.log(`O aluno está aprovado com excelência!`);
}