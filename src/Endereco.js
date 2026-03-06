export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    
    estadoCaixaAlta() { return this.estado.toUpperCase(); }
    cidadeCaixaAlta() { return this.cidade.toUpperCase(); }
    ruaCaixaAlta() { return this.rua.toUpperCase(); }

    detalhes() {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`;
    }
}

export default Endereco