// ES5

var alunos = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Filype', idade: 17},
    {nome: 'Maria', idade: 18}
]

var alunosDeMaior = [];
for(var i = 0; i < alunos.length; i++){
    if(alunos[i].idade >= 18) {
        alunosDeMaior.push(alunos[i]);
    }
}

console.log(alunosDeMaior);

// ES6

var alunos = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Filype', idade: 17},
    {nome: 'Maria', idade: 18}
]

var alunosDeMaior = alunos.filter(function(aluno) {
    return aluno.idade >= 18;
})


console.log(alunosDeMaior);