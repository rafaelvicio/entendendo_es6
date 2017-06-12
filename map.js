// ES5

var numeros = [1, 2, 3];
var dobro = [];

for(var i = 0; i < numeros.length; i++){
    dobro.push(numeros[i] * 2);
}

console.log(numeros);
console.log(dobro);

// ES6

var numeros = [1, 2, 3];
var dobro = numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros);
console.log(dobro);