// ES5

var alunos = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Filype', idade: 17},
    {nome: 'Maria', idade: 18}
]

var aluno;
for(var i = o; i < alunos.length; i++){
    if(alunos[i].nome === 'Maria') {
        aluno = alunos[i];
        break;
    }
}

console.log(aluno);

// ES6

var alunos = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Filype', idade: 17},
    {nome: 'Maria', idade: 18}
]

var aluno = alunos.find(function(aluno){
    return aluno.nome === 'Maria';
});

console.log(aluno);