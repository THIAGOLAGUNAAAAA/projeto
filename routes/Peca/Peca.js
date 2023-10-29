class Peca {
    constructor(id,nome,referencia){
      this.id = id;
      this.nome = nome;
      this.referencia = referencia;
    }

    static criar(pecas, id, nome,referencia ) {
        const peca = new Peca(id, nome, referencia);
        pecas.push(pecas);
        return peca;
      }

      static listar(pecas) {
        return pecas;
      }

      static obter(pecas, id) {
        return pecas.find((pecas) => pecas.id === id);
      }

      static atualizar(pecas, id, nome, referencia) {
        const pecas = this.obter(pecas, id);
        if (pecas) {
          pecas.nome = nome;
          pecas.referencia = referencia;
          return pecas;
        }
        return null;
      }

      static deletar(pecas, id) {
        const index = Peca.findIndex((pecas) => pecas.id === id);
        if (index !== -1) {
          const PecaRemovido = peca.splice(index, 1)[0];
          return PecaRemovido;
        }
        return null;
      }
    }
    
    module.exports = Peca;

