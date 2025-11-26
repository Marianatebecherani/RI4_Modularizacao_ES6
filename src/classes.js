/**
 * RI 4 - Módulo Principal: Definição das Classes (ES6 Module Export)
 */

// --- Classes de Dados (Telefone e Endereco) ---

// Exporta a classe para que possa ser importada
export class Telefone {
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

// Exporta a classe para que possa ser importada
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

// --- Classes Principais com Atributos Privados e Sets ---

// Exporta a classe para que possa ser importada
export class Cliente {
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

// Exporta a classe para que possa ser importada
export class Empresa {
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
        let output = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n\n`; // [cite: 155, 156]

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