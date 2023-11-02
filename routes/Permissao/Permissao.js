class Permissao {
    constructor(id,nome,senha){
      this.id = id;
      this.nome = nome;
      this.senha = senha;
    }

    static criar(id, nome,senha ) {
      const permissao = new Permissao(id, nome, senha);
      return permissao;
      }

      static listar(permissao) {
        return permissao;
      }

      static obter(permissao, id) {
        return permissao.find((permissao) => permissao.id === id);
      }

      static atualizar(permissao, id, nome, senha) {
        const permissoes = this.obter(permissao, id,nome,senha);
        if (permissoes) {
            permissoes.nome = nome;
            permissoes.senha = senha;
          return permissoes;
        }
        return null;
      }

      static deletar(permissao, id) {
        const index = permissao.findIndex((permissao) => permissao.id === id);
        if (index !== -1) {
          const permissaoRemovido = permissao.splice(index, 1)[0];
          return permissaoRemovido;
        }
        return null;
      }
    }
    
    module.exports = Permissao;