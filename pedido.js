class Pedido {
  constructor() {
    this.itens = [];
    this.status = 'Em preparação';
    this.numeroPedido = 0; // Inicializa o número do pedido com 0
  }

  adicionarItem(nome, preco) {
    if (this.numeroPedido === 0)
        this.numeroPedido++; // Incrementa o número do pedido para o próximo item

    const novoItem = { nome, preco, numeroPedido: this.numeroPedido };
    this.itens.push(novoItem);
  }

  removerItem(nome) {
    this.itens = this.itens.filter(item => item.nome !== nome);
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  mostrarStatus(numeroPedido) {
    const pedido = this.itens.find(item => item.numeroPedido === numeroPedido);
    return pedido ? `Status do pedido ${numeroPedido}: ${this.status}` : 'Pedido não encontrado';
  }
}

const pedido = new Pedido();

pedido.adicionarItem('Pizza', 25);
pedido.adicionarItem('Refrigerante', 5);
pedido.adicionarItem('Hambúrguer', 20);

console.log('Itens do pedido:', pedido.itens);

const numeroPedidoBuscado = 1;
console.log(pedido.mostrarStatus(numeroPedidoBuscado));

pedido.removerItem('Refrigerante');

console.log('Itens do pedido após remoção:', pedido.itens);
console.log('Total do pedido:', pedido.calcularTotal());
pedido.alterarStatus('Pronto para entrega');
console.log('Novo status do pedido:', pedido.mostrarStatus(numeroPedidoBuscado));
















