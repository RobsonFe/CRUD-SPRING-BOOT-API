create database db_usuario;
use db_usuario;

create table usuario (
id int auto_increment primary key,
nome varchar(200) not null,
email varchar(50) not null unique,
senha text not null
);

insert into usuario (nome, username, email, senha) values("Robson Ferreira", "rob", "robson@hotmail.com", "12345");
insert into usuario (nome, username, email, senha) values("Thais Silva", "tay", "thais@hotmail.com", "14580");
insert into usuario (nome, username, email, senha) values("Adams Jose", "adamsj", "adams@hotmail.com", "78945");
insert into usuario (nome, username, email, senha) values("Eduarda Santos", "duda", "eduarda@hotmail.com", "58980");

select * from usuario;
