class Estoque {
    constructor(id,nome,referencia){
      this.id = id;
      this.nome = nome;
      this.referencia = referencia;
    }

    static criar(estoque, id, nome,referencia ) {
        const estoque = new Estoque(id, nome, referencia);
        estoque.push(estoque);
        return estoque;
      }

      static listar(estoque) {
        return estoque;
      }

      static obter(estoque, id) {
        return estoque.find((estoque) => estoque.id === id);
      }

      static atualizar(estoque, id, nome, referencia) {
        const estoque = this.obter(estoque, id);
        if (estoque) {
            estoque.nome = nome;
            estoque.referencia = referencia;
          return estoque;
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
