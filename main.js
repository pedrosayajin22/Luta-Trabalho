"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lutador1_1 = require("./lutador1");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
const nome = teclado("Qual é o nome do lutador 1: ");
const nome1 = teclado("Qual é o nome do lutador 2: ");
const lutador1 = new lutador1_1.Lutador(nome);
const lutador2 = new lutador1_1.Lutador(nome1);
console.log(lutador1);
console.log(lutador2);
console.log(`Nome: ${lutador1.nome}`);
console.log(`Nome: ${lutador2.nome}`);
// while(true){
// }
