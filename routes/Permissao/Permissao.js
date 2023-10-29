class Permissao {
    constructor(id,nome,senha){
      this.id = id;
      this.nome = nome;
      this.senha = senha;
    }

    static criar(permissao, id, nome,senha) {
        const permissao = new Permissao(id, nome, senha);
        permissao.push(permissao);
        return permissao;
      }

      static listar(permissao) {
        return permissao;
      }

      static obter(permissao, id) {
        return permissao.find((permissao) => usuarios.id === id);
      }

      static atualizar(permissao, id, nome, senha) {
        const permissao = this.obter(usuarios, id,nome,senha);
        if (permissao) {
            permissao.nome = nome;
            permissao.senha = senha;
          return permissao;
        }
        return null;
      }

      static deletar(permissao, id) {
        const index = usuarios.findIndex((permissao) => permissao.id === id);
        if (index !== -1) {
          const permissaoRemovido = permissao.splice(index, 1)[0];
          return permissaoRemovido;
        }
        return null;
      }
    }
    
    module.exports = Permissao;