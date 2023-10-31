class Usuarios {
    constructor(id,nome,senha){
      this.id = id;
      this.nome = nome;
      this.senha = senha;
    }

    static criar(id, nome,senha ) {
      const usuarios = new Usuarios(id, nome, senha);
      return usuarios;
      }

      static listar(usuarios) {
        return usuarios;
      }

      static obter(usuarios, id) {
        return usuarios.find((usuarios) => usuarios.id === id);
      }

      static atualizar(usuarios, id, nome, senha) {
        const usuario = this.obter(usuarios, id,nome,senha);
        if (usuario) {
            usuario.nome = nome;
            usuario.senha = senha;
          return usuario;
        }
        return null;
      }

      static deletar(usuarios, id) {
        const index = usuarios.findIndex((usuarios) => usuarios.id === id);
        if (index !== -1) {
          const UsuariosRemovido = usuarios.splice(index, 1)[0];
          return UsuariosRemovido;
        }
        return null;
      }
    }
    
    module.exports = Usuarios;

    