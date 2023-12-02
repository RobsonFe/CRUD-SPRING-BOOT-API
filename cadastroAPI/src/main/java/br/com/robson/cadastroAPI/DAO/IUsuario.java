package br.com.robson.cadastroAPI.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.robson.cadastroAPI.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
