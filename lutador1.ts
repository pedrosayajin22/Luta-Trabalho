export class Lutador {


    constructor(
        private _nome: string,
        protected _especial: string = "",
        private _vida: number = 100,
        private _peso: number =  50+ Math.round(Math.random()*50),
        private _energia: number = 100
    ) 
    {

    }
    public get nome():string{
        return this._nome
    }
    public set nome (nome:string){
        this._nome = nome;
        console.log(this.nome);
        
    }
}
     


