const prompt = require('prompt-sync')();

class Produto {
  constructor(cod, descricao, valor, estoque) {
    this.cod = cod;
    this.descricao = descricao;
    this.valor = valor;
    this.estoque = estoque;
  }
}

class Cliente {
  constructor(numero, nome, email) {
    this.numero = numero;
    this.nome = nome;
    this.email = email;
  }
}

const produtos = [];
const clientes = [];

function cadastrarProduto() {
  const cod = prompt("Informe o código do produto: ");
  const descricao = prompt("Informe a descrição do produto: ");
  const valor = parseFloat(prompt("Informe o valor do produto: "));
  const estoque = parseInt(prompt("Informe o estoque do produto: "));

  const produto = new Produto(cod, descricao, valor, estoque);
  produtos.push(produto);
  console.log("Produto cadastrado com sucesso!");
}

function cadastrarCliente() {
  const numero = prompt("Informe o número do cliente: ");
  const nome = prompt("Informe o nome do cliente: ");
  const email = prompt("Informe o email do cliente: ");

  const cliente = new Cliente(numero, nome, email);
  clientes.push(cliente);
  console.log("Cliente cadastrado com sucesso!");
}

function alterarProduto() {
  const cod = prompt("Informe o código do produto que deseja alterar: ");
  const produto = produtos.find((p) => p.cod === cod);

  if (!produto) {
    console.log("Produto não encontrado.");
    return;
  }

  const novoDescricao = prompt("Informe a nova descrição do produto: ");
  const novoValor = parseFloat(prompt("Informe o novo valor do produto: "));
  const novoEstoque = parseInt(prompt("Informe o novo estoque do produto: "));

  produto.descricao = novoDescricao;
  produto.valor = novoValor;
  produto.estoque = novoEstoque;

  console.log("Produto alterado com sucesso!");
}

function excluirProduto() {
  const cod = prompt("Informe o código do produto que deseja excluir: ");
  const index = produtos.findIndex((p) => p.cod === cod);

  if (index === -1) {
    console.log("Produto não encontrado.");
    return;
  }

  produtos.splice(index, 1);
  console.log("Produto excluído com sucesso!");
}

function listarProdutos() {
  console.log("Lista de Produtos:");
  produtos.forEach((produto) => {
    console.log(`Código: ${produto.cod}, Descrição: ${produto.descricao}, Valor: ${produto.valor}, Estoque: ${produto.estoque}`);
  });
}

function alterarCliente() {
  const numero = prompt("Informe o número do cliente que deseja alterar: ");
  const cliente = clientes.find((c) => c.numero === numero);

  if (!cliente) {
    console.log("Cliente não encontrado.");
    return;
  }

  const novoNome = prompt("Informe o novo nome do cliente: ");
  const novoEmail = prompt("Informe o novo email do cliente: ");

  cliente.nome = novoNome;
  cliente.email = novoEmail;

  console.log("Cliente alterado com sucesso!");
}

function excluirCliente() {
  const numero = prompt("Informe o número do cliente que deseja excluir: ");
  const index = clientes.findIndex((c) => c.numero === numero);

  if (index === -1) {
    console.log("Cliente não encontrado.");
    return;
  }

  clientes.splice(index, 1);
  console.log("Cliente excluído com sucesso!");
}

function listarClientes() {
  console.log("Lista de Clientes:");
  clientes.forEach((cliente) => {
    console.log(`Número: ${cliente.numero}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
  });
}

while (true) {
  console.log("\nEscolha uma opção:");
  console.log("1 - Cadastrar Produto");
  console.log("2 - Cadastrar Cliente");
  console.log("3 - Alterar Produto");
  console.log("4 - Excluir Produto");
  console.log("5 - Listar Produtos");
  console.log("6 - Alterar Cliente");
  console.log("7 - Excluir Cliente");
  console.log("8 - Listar Clientes");
  console.log("9 - Sair");

  const opcao = parseInt(prompt("Opção: "));

  switch (opcao) {
    case 1:
      cadastrarProduto();
      break;
    case 2:
      cadastrarCliente();
      break;
    case 3:
      alterarProduto();
      break;
    case 4:
      excluirProduto();
      break;
    case 5:
      listarProdutos();
      break;
    case 6:
      alterarCliente();
      break;
    case 7:
      excluirCliente();
      break;
    case 8:
      listarClientes();
      break;
    case 9:
      console.log("Saindo do programa.");
      process.exit();
    default:
      console.log("Opção inválida.");
  }
}
