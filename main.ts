import { Lutador } from "./lutador1";
import prompt from "prompt-sync";


const teclado= prompt()
const nome= teclado("Qual é o nome do lutador 1: ")
const nome1= teclado("Qual é o nome do lutador 2: ")


const lutador1 : Lutador = new Lutador(nome);
const lutador2 : Lutador = new Lutador(nome1);

console.log(lutador1)
console.log(lutador2)



console.log(`Nome: ${lutador1.nome}`);
console.log(`Nome: ${lutador2.nome}`);
// while(true){
    

// }