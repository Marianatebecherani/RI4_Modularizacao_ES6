/**
 * RI 4 - Módulo de Teste e Execução (ES6 Module Import)
 */

// Importa as classes.
import Empresa from "./Empresa.js";
import Cliente from "./Cliente.js";
import Endereco from "./Endereco.js";
import Telefone from "./Telefone.js";

// --- Lógica de Criação e Teste ---

// a. Cria uma empresa e atribui endereço e 2 telefones.
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Rua Empresarial', '100');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-90', enderecoEmpresa);

const telEmpresa1 = new Telefone('11', '30001111');
const telEmpresa2 = new Telefone('11', '30002222');
empresa.adicionarTelefone(telEmpresa1);
empresa.adicionarTelefone(telEmpresa2);


// b. Cria cinco clientes, cada um com endereço e 2 telefones.
const cliente1 = new Cliente('João', '111.111.111-11', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987')); // [cite: 157-160]
cliente1.adicionarTelefone(new Telefone('99', '99999999'));
cliente1.adicionarTelefone(new Telefone('99', '88888888'));

const cliente2 = new Cliente('Gabriel', '222.222.222-22', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '412')); // [cite: 161-164]
cliente2.adicionarTelefone(new Telefone('88', '77777777'));
cliente2.adicionarTelefone(new Telefone('88', '66666666'));

const cliente3 = new Cliente('Barbara', '333.333.333-33', new Endereco('SP', 'São José dos Campos', 'Av São João', '789')); // [cite: 165-168]
cliente3.adicionarTelefone(new Telefone('77', '55555555'));
cliente3.adicionarTelefone(new Telefone('77', '44444444'));

const cliente4 = new Cliente('Márcia', '444.444.444-44', new Endereco('SP', 'São José dos Campos', 'Av Andromeda', '452')); // [cite: 169-172]
cliente4.adicionarTelefone(new Telefone('66', '33333333'));
cliente4.adicionarTelefone(new Telefone('66', '22222222'));

const cliente5 = new Cliente('Pedro', '555.555.555-55', new Endereco('MG', 'Belo Horizonte', 'Rua Modular', '10'));
cliente5.adicionarTelefone(new Telefone('31', '911111111'));
cliente5.adicionarTelefone(new Telefone('31', '922222222'));


// c. Clientes devem ser colocados no conjunto de clientes da empresa.
empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);


// d. Geração da descrição da empresa.
console.log("===================================================================");
console.log("                  RI 4: RELATÓRIO MODULARIZADO                  ");
console.log("===================================================================");
console.log(empresa.detalhes());

// Teste de acesso e métodos
console.log(`\n--- Testes de Funcionalidade ---`);
console.log(`CNPJ da Empresa: ${empresa.cnpj}`);
console.log(`CPF do Cliente 1: ${cliente1.cpf}`);
console.log(`Razão Social: ${empresa.razaoSocialCaixaAlta()}`);