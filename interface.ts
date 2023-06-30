export interface LutadorInter {
    _nome: string
    _vida: number
    _peso: number
    _energia: number
    status(): void
    recebeSocoDe(alvo: LutadorInter): void
    acertouSoco(): void
}