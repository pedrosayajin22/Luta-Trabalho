import { LutadorInter } from "./interface";
import { Lutador } from "./lutador1";

export class Lutador2 extends Lutador implements LutadorInter{
    constructor(nome: string) {
        super(nome)
        this._vida = 120;
    }

    recebeSocoDe(alvo: LutadorInter): void {
        if (this._peso >= 90) {
            this._vida -= 5
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 7
        }
        else if (this._peso <= 60) {
            this._vida -= 10
        }
    }
}