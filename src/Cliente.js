
class Cliente {
    #cpf; // Atributo privado

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set(); // Conjunto de telefones
        this.#cpf = cpf;
    }

    get cpf() { // Getter para o privado
        return this.#cpf;
    }
    
    nomeCaixaAlta() { return this.nome.toUpperCase(); } // Requisito caixa alta/baixa

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    detalhes() {
        let detalhesTelefones = Array.from(this.telefones).map(t => `   ${t.detalhes()}`).join('\n');
        
        // Saída formatada do cliente
        return `Nome: ${this.nome}\n${this.endereco.detalhes()}\n${detalhesTelefones}`;
    }
}

export default Cliente