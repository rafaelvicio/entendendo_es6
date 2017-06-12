// ES5

var numeros = [1, 2, 3, 4, 5];

var soma = 0;
for (var i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log(soma);

// ES6

var numeros = [1, 2, 3, 4, 5];

soma = numeros.reduce(function(soma, numero){
    return soma + numero;
}, 0)

console.log(soma);

// Outro exemplo

var alunos = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Filype', idade: 17},
    {nome: 'Maria', idade: 18}
];

var nomes = alunos.reduce(function(arrayNomes, aluno){
    arrayNomes.push(aluno.nome);
    return arrayNomes;
}, []);

console.log(nomes);