"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lutador2 = void 0;
const lutador1_1 = require("./lutador1");
class Lutador2 extends lutador1_1.Lutador {
    constructor(nome) {
        super(nome);
        this._vida = 120;
    }
    recebeSocoDe(alvo) {
        if (this._peso >= 90) {
            this._vida -= 5;
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 7;
        }
        else if (this._peso <= 60) {
            this._vida -= 10;
        }
    }
}
exports.Lutador2 = Lutador2;
