#language: pt

Funcionalidade: Listagem

Como usuário, desejo acessar a Listagem
Para que possa visualizar meus dados de cadastro

Cenario: Listagem sem registro
Dado que o site não tenha registros
Quando acessar a listagem
Entao devo visualizar a listagem vazia

Cenario: Listagem com 1 registro
Dado que o site possui apenas um registro
Quando acessar a listagem
Entao devo visualizar apenas um registro