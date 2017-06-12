var perfilDoFacebook = {
    nome: 'Rafael',
    idade: 22
}

for (var propriedade in perfilDoFacebook){
    var info = perfilDoFacebook[propriedade];
    console.log(info);
}