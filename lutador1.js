"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lutador = void 0;
class Lutador {
    constructor(_nome, _especial = "", _vida = 100, _peso = 50 + Math.round(Math.random() * 50), _energia = 100) {
        this._nome = _nome;
        this._especial = _especial;
        this._vida = _vida;
        this._peso = _peso;
        this._energia = _energia;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
        console.log(this.nome);
    }
}
exports.Lutador = Lutador;
