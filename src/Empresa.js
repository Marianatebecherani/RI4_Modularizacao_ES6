
class Empresa {
    #cnpj; // Atributo privado

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
        this.#cnpj = cnpj;
    }

    get cnpj() { // Getter para o privado
        return this.#cnpj;
    }

    razaoSocialCaixaAlta() { return this.razaoSocial.toUpperCase(); } // Requisito caixa alta/baixa
    nomeFantasiaCaixaAlta() { return this.nomeFantasia.toUpperCase(); }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
    
    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }
    
    // Requisito: Método de descrição da Empresa e Clientes (Parte 3)
    detalhes() {
        let output = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n\n`;

        // Descrição dos Telefones da Empresa
        output += `Telefones da Empresa:\n`;
        Array.from(this.telefones).forEach(t => {
            output += `  ${t.detalhes()}\n`;
        });
        output += `\n`;
        
        // Descrição dos Clientes (itera sobre o Set)
        output += `--- CLIENTES CADASTRADOS (${this.clientes.size}) ---\n`;
        Array.from(this.clientes).forEach(c => {
            output += `${c.detalhes()}\n\n`;
        });
        
        return output;
    }
}

export default Empresa