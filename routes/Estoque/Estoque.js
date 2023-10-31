class Estoque {
    constructor(id,nome,referencia){
      this.id = id;
      this.nome = nome;
      this.referencia = referencia;
    }

    static criar(id, nome,referencia ) {
        const estoques = new Estoque(id, nome, referencia);
        return estoques;
      }

      static listar(estoque) {
        return estoque;
      }

      static obter(estoque, id) {
        return estoque.find((estoque) => estoque.id === id);
      }

      static atualizar(estoque, id, nome, referencia) {
        const estoques = this.obter(estoque, id);
        if (estoques) {
            estoques.nome = nome;
            estoques.referencia = referencia;
          return estoques;
        }
        return null;
      }

      static deletar(estoque, id) {
        const index = estoque.findIndex((estoque) => estoque.id === id);
        if (index !== -1) {
          const estoqueRemovido = estoque.splice(index, 1)[0];
          return estoqueRemovido;
        }
        return null;
      }
    }
    
    module.exports = Estoque;
