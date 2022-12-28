/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"*/

let num = Math.floor(Math.random()*10)+1;
let numero = parseInt(prompt('Adivine el numero entre 1 y 10:'));
if(num === numero) {
console.log('Felicitaciones, ese era!');
}else{
console.log("Lo siento, intenta nuevamente!, el número era:" + num)}               