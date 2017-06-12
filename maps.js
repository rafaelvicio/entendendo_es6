var map = new Map();
function funcao(){};
var objecto = {};

map.set("String", "sou uma string");
map.set(objecto, "sou um objecto");
map.set(funcao, "sou uma funcao");

console.log(map.get("string"));
console.log(map.get(objecto));
console.log(map.get(funcao));

console.log("Tamanho: " + map.size);
console.log(map.has("string"));
console.log(map.has("abc"));

map.delete("string")
console.log(map.has("string"));

map.clear();
console.log("Tamanho: " + map.size);

var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('três', 3);

for(var chave of mapa.keys()){
console.log(chave); 
}

for(var valor of map.values()){
    console.log(valor)
}

for(var entrada of mapa.entries()){
    console.log(entrada)
}
