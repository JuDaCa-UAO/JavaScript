let nombre = "Juan"
//deben ser 3 iguales para hacer comparativas
if(nombre === "mauricio"){
    console.log("hola")
}
else{
    console.log("quién sos?");
}

//switch
let expr = "naranjas"
switch(expr){
    case "naranjas":
        console.log("Gangplank")
    break;
    case "Tímulos":
        console.log("¿Qué es tímulo?")
    break;
}

//while

let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador ++;
}

//do-while
let counter = 0;
do{
    console.log(counter);
    counter ++;
}while(counter<10);

// For
let frutas = ['naranja','pera','chontaduro','mango']
for(let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

//for-in
const listaDeCompras={
    yuca: 5,
    arracacha: 23,
    papa: 34,
    arroz: 43
}

for(lista1 in listaDeCompras){
    console.log(lista1);
}
//concatenar
for(lista1 in listaDeCompras){
    console.log(`${lista1}: ${listaDeCompras[lista1]}`);
}

//for-of

listaDeCompras1 = ["papa","yuca","arracacha","arroz"]
for(lista2 of listaDeCompras1){
    console.log(lista2)
}