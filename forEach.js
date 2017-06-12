// Utilizando For

var nomes = ['Rafael', 'Filype', 'Maria'];
for(var i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Utilizando ForEach - Anônima

var nomes = ['Rafael', 'Filype', 'Maria'];
nomes.forEach(function(nome) {
    console.log(nome);
})

// Tambem podemos fazer assim

var nomes = ['Rafael', 'Filype', 'Maria'];
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);