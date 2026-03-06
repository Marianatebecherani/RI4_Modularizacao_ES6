
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    dddCaixaAlta() { return this.ddd.toUpperCase(); }
    numeroCaixaAlta() { return this.numero.toUpperCase(); }

    detalhes() {
        return `ddd: ${this.ddd} numero: ${this.numero}`;
    }
}

export default Telefone