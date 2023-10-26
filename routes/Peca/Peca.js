class Peca {
    constructor(id,nome,referencia){
      this.id = id;
      this.nome = nome;
      this.referencia = referencia;
    }

    static criar(pecas, id, nome, ) {
        const peca = new Peca(id, nome, referencia);
        pecas.push(peca);
        return peca;
      }

      static listar(Peca) {
        return Peca;
      }

      static obter(Peca, id) {
        return Peca.find((Peca) => Peca.id === id);
      }

      static atualizar(Peca, id, nome, ativo) {
        const Peca = this.obter(Peca, id);
        if (Peca) {
          Peca.nome = nome;
          Peca.ativo = ativo;
          return Peca;
        }
        return null;
      }

      static deletar(Peça, id) {
        const index = Peca.findIndex((Peca) => Peca.id === id);
        if (index !== -1) {
          const PecaRemovido = Peca.splice(index, 1)[0];
          return PecaRemovido;
        }
        return null;
      }
    }
    
    module.exports = Peca;

