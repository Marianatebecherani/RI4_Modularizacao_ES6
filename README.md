# RI4: Modularização com ES6 em JavaScript

Projeto de Programação Orientada a Objetos (POO) em JavaScript (RI 4) que introduz a modularização ES6 (`import`/`export`). Reutilizando o contexto do RI 3, este exercício separa as classes (`Empresa`, `Cliente`, `Telefone`, `Endereco`) em um módulo principal e as importa em um módulo de teste (consumidor). Garante o uso de classes, atributos privados e métodos de acesso e formatação.

## Estrutura de Arquivos

O projeto está organizado da seguinte forma:

```
RI4_Modularizacao_ES6/
└── src/
    ├── classes.js      # Módulo principal que define e exporta as classes.
    └── ri4.js          # Módulo de execução que importa as classes e as utiliza.
```

- **`src/classes.js`**: Contém a definição das classes `Empresa`, `Cliente`, `Endereco` e `Telefone`. Cada classe é exportada para que possa ser utilizada por outros módulos.
- **`src/ri4.js`**: É o ponto de entrada da aplicação. Ele importa as classes, cria instâncias de objetos (uma empresa, cinco clientes, etc.) e exibe um relatório detalhado no console.

## Como Executar o Projeto

Para executar este projeto localmente via terminal, siga os passos abaixo.

### Pré-requisitos

Antes de começar, certifique-se de ter o [Git](https://git-scm.com/) e o [Node.js](https://nodejs.org/) (versão 14 ou superior) instalados em sua máquina.

### Passos para Execução

1.  **Clone o repositório** para a sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/RI4_Modularizacao_ES6.git
    ```
    > Lembre-se de substituir `seu-usuario` pelo nome de usuário correto do GitHub.

2.  **Navegue até o diretório** do projeto:
    ```bash
    cd RI4_Modularizacao_ES6
    ```

3.  **Execute o script principal** usando o Node.js:
    ```bash
    node src/ri4.js
    ```

A saída do relatório será exibida diretamente no seu terminal.
