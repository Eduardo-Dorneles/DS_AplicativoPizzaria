-- banco da pizzaria palladares
-- obs: toda vez que roda ele apaga o banco e cria de novo

DROP DATABASE IF EXISTS Palladares;
CREATE DATABASE Palladares;
USE Palladares;


-- funcionarios (cargo: Administrador, Atendente ou Cozinheiro)
CREATE TABLE funcionario (
    id_func       INT PRIMARY KEY AUTO_INCREMENT,
    nome_func     VARCHAR(100) NOT NULL,
    telefone_func VARCHAR(20)  NOT NULL,
    endereco_func VARCHAR(200),
    cargo_func    VARCHAR(30)  NOT NULL, # Melhor seria usar "INT"
    login_func    VARCHAR(50)  NOT NULL,
    senha_func    VARCHAR(255) NOT NULL,
    status_func   BOOLEAN NOT NULL DEFAULT TRUE,
    UNIQUE (telefone_func),
    UNIQUE (login_func)
);

-- clientes, endereco pode ficar vazio se for retirada
CREATE TABLE cliente (
    id_cliente       INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente     VARCHAR(100) NOT NULL,
    telefone_cliente VARCHAR(20)  NOT NULL,
    endereco_cliente VARCHAR(200),
    UNIQUE (telefone_cliente)
);

-- cardapio
CREATE TABLE produto (
    id_prod        INT PRIMARY KEY AUTO_INCREMENT,
    nome_prod      VARCHAR(100) NOT NULL,
    descricao_prod VARCHAR(255),
    categoria_prod VARCHAR(50)  NOT NULL,#Melhor seria usar "INT"
    valor_prod     DECIMAL(10,2) NOT NULL,
    ativo_prod     BOOLEAN NOT NULL DEFAULT TRUE
);

-- estoque
CREATE TABLE ingredientes (
    id_ingre         INT PRIMARY KEY AUTO_INCREMENT,
    descricao_ingre  VARCHAR(100) NOT NULL,
    quantidade_ingre DECIMAL(10,2) NOT NULL DEFAULT 0,
    unidade_ingre    VARCHAR(10)  NOT NULL,
    UNIQUE (descricao_ingre)
);

-- receita de cada produto
CREATE TABLE produtoxingrediente (
    id_prod   INT NOT NULL,
    id_ingre  INT NOT NULL,
    qtd_usada DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_prod)  REFERENCES produto(id_prod),
    FOREIGN KEY (id_ingre) REFERENCES ingredientes(id_ingre)
);

-- pedidos (id_func vazio = pedido do site)
CREATE TABLE compra (
    id_compra         INT PRIMARY KEY AUTO_INCREMENT,
    data_compra       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_cliente        INT NOT NULL,
    id_func           INT,
    origem_compra     VARCHAR(10) NOT NULL,
    tipo_compra       VARCHAR(10) NOT NULL, #melhor seria usar "INT"
    status_compra     VARCHAR(30) NOT NULL DEFAULT 'Recebido',#melhor seria usar "INT"
    pagamento_compra  VARCHAR(10) NOT NULL,#melhor seria usar "INT"
    troco_para_compra DECIMAL(10,2), # seria melhor usar um campo de anotações
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_func)    REFERENCES funcionario(id_func)
);

-- itens de cada pedido
CREATE TABLE compraxproduto (
    id_compra      INT NOT NULL,
    id_prod        INT NOT NULL,
    qtd_prod       INT NOT NULL DEFAULT 1,
    valor_unitario DECIMAL(10,2) NOT NULL,
    observacao     VARCHAR(200),
    FOREIGN KEY (id_compra) REFERENCES compra(id_compra),
    FOREIGN KEY (id_prod)   REFERENCES produto(id_prod)
);

-- USUARIOS 
-- administrador pode tudo (o % deixa conectar de qualquer maquina)
-- atendente so le e mexe em cliente e pedido
-- cozinheiro ve os pedidos e receitas, e so muda o status do pedido

DROP USER IF EXISTS 'administrador'@'%';
DROP USER IF EXISTS 'atendente'@'%';
DROP USER IF EXISTS 'cozinheiro'@'%';

CREATE USER 'administrador'@'%' IDENTIFIED BY 'Admin@123';
CREATE USER 'atendente'@'%' IDENTIFIED BY 'Atende@123';
CREATE USER 'cozinheiro'@'%' IDENTIFIED BY 'Cozinha@123';

GRANT ALL PRIVILEGES ON Palladares.* TO 'administrador'@'%';

GRANT SELECT ON Palladares.* TO 'atendente'@'%';
GRANT INSERT, UPDATE ON Palladares.cliente TO 'atendente'@'%';
GRANT INSERT, UPDATE ON Palladares.compra TO 'atendente'@'%';
GRANT INSERT, UPDATE ON Palladares.compraxproduto TO 'atendente'@'%';

GRANT SELECT ON Palladares.compra TO 'cozinheiro'@'%';
GRANT SELECT ON Palladares.compraxproduto TO 'cozinheiro'@'%';
GRANT SELECT ON Palladares.produto TO 'cozinheiro'@'%';
GRANT SELECT ON Palladares.produtoxingrediente TO 'cozinheiro'@'%';
GRANT UPDATE (status_compra) ON Palladares.compra TO 'cozinheiro'@'%';

-- INSERT 

-- senha com SHA2 pra nao ficar a senha pura no banco
INSERT INTO funcionario (nome_func, telefone_func, endereco_func, cargo_func, login_func, senha_func) VALUES
('Bernardo Pianecer', '47991000001', 'Rua das Flores, 10',   'Administrador', 'bernardo', SHA2('senha123', 256)),
('Eduardo Dorneles',  '47991000002', 'Rua XV de Novembro, 20', 'Administrador', 'eduardo', SHA2('senha123', 256)),
('Henrique Anacleto', '47991000003', 'Rua Blumenau, 30',     'Atendente',     'henrique', SHA2('senha123', 256)),
('Ana Souza',         '47991000004', 'Rua Itajai, 40',       'Atendente',     'ana',      SHA2('senha123', 256)),
('Bruno Lima',        '47991000005', 'Rua Joinville, 50',    'Atendente',     'bruno',    SHA2('senha123', 256)),
('Carla Mendes',      '47991000006', 'Rua Gaspar, 60',       'Atendente',     'carla',    SHA2('senha123', 256)),
('Diego Rocha',       '47991000007', 'Rua Pomerode, 70',     'Cozinheiro',    'diego',    SHA2('senha123', 256)),
('Elisa Prado',       '47991000008', 'Rua Indaial, 80',      'Cozinheiro',    'elisa',    SHA2('senha123', 256)),
('Fabio Costa',       '47991000009', 'Rua Timbo, 90',        'Cozinheiro',    'fabio',    SHA2('senha123', 256)),
('Gabi Nunes',        '47991000010', 'Rua Brusque, 100',     'Cozinheiro',    'gabi',     SHA2('senha123', 256));

INSERT INTO cliente (nome_cliente, telefone_cliente, endereco_cliente) VALUES
('Mariana Alves',  '47998000001', 'Rua A, 11 - Centro'),
('Joao Pereira',   '47998000002', NULL),
('Camila Ramos',   '47998000003', 'Rua B, 22 - Velha'),
('Lucas Martins',  '47998000004', 'Rua C, 33 - Garcia'),
('Paula Teixeira', '47998000005', NULL),
('Rafael Gomes',   '47998000006', 'Rua D, 44 - Itoupava'),
('Sofia Barros',   '47998000007', 'Rua E, 55 - Victor Konder'),
('Tiago Freitas',  '47998000008', NULL),
('Vitoria Dias',   '47998000009', 'Rua F, 66 - Escola Agricola'),
('Wagner Lopes',   '47998000010', 'Rua G, 77 - Fortaleza');

INSERT INTO ingredientes (descricao_ingre, quantidade_ingre, unidade_ingre) VALUES
('Pao de hamburguer', 100, 'un'),
('Hamburguer',         80, 'un'),
('Queijo',             10, 'kg'),
('Presunto',            8, 'kg'),
('Bacon',               5, 'kg'),
('Alface',              3, 'kg'),
('Massa de pizza',     40, 'un'),
('Batata',             20, 'kg'),
('Chocolate',           4, 'kg'),
('Palmito',             2, 'kg');

INSERT INTO produto (nome_prod, descricao_prod, categoria_prod, valor_prod) VALUES
('X-Burguer',      'Pao, hamburguer, presunto e queijo.',                 'Lanches Tradicionais', 15.00),
('X-Bacon',        'Pao, bacon, ovo, hamburguer, presunto e queijo.',     'Lanches Tradicionais', 29.00),
('X-Salada',       'Pao, hamburguer, presunto, queijo, alface e tomate.', 'Lanches Tradicionais', 19.00),
('Misto Quente',   'Pao, presunto e queijo.',                             'Lanches Tradicionais', 13.00),
('X-Chocolate',    'Pao, chocolate preto ou branco e queijo.',            'Lanches Doces',        22.00),
('Pizza Pequena',  '2 sabores, 8 fatias, 30 cm.',                         'Pizzas',               67.90),
('Pizza Grande',   '4 sabores, 16 fatias, 40 cm.',                        'Pizzas',               97.90),
('Fritas',         'Batata frita crocante e salgada.',                    'Porcoes',              27.00),
('Coca-Cola 2L',   'Refrigerante 2 litros.',                              'Bebidas',              19.00),
('Acai na Taca',   'Somente acai.',                                       'Sobremesas',           22.00);


-- qtd_usada em kg ou unidade, palmito nao entra em nenhuma receita
INSERT INTO produtoxingrediente (id_prod, id_ingre, qtd_usada) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 0.05),
(2, 5, 0.06),
(3, 6, 0.03),
(4, 4, 0.04),
(5, 9, 0.08),
(6, 7, 1),
(7, 7, 1),
(8, 8, 0.40);

-- origem: site ou balcao / tipo: entrega ou retirada
INSERT INTO compra (data_compra, id_cliente, id_func, origem_compra, tipo_compra, status_compra, pagamento_compra, troco_para_compra) VALUES
('2026-11-03 19:05:00', 1, NULL, 'site',   'entrega',  'Concluido',           'pix',      NULL),
('2026-11-03 19:20:00', 2, 3,    'balcao', 'retirada', 'Concluido',           'dinheiro', 50.00),
('2026-11-04 18:45:00', 3, NULL, 'site',   'entrega',  'Concluido',           'cartao',   NULL),
('2026-11-04 20:10:00', 4, 4,    'balcao', 'retirada', 'Concluido',           'pix',      NULL),
('2026-11-05 19:00:00', 5, NULL, 'site',   'retirada', 'Pronto',              'dinheiro', 100.00),
('2026-11-05 19:30:00', 6, 5,    'balcao', 'entrega',  'Em preparacao',       'cartao',   NULL),
('2026-11-05 19:40:00', 7, NULL, 'site',   'entrega',  'Confirmado',          'pix',      NULL),
('2026-11-05 19:50:00', 8, 6,    'balcao', 'retirada', 'Recebido',            'dinheiro', 30.00),
('2026-11-05 20:00:00', 9, NULL, 'site',   'entrega',  'Recebido',            'cartao',   NULL),
('2026-11-05 20:05:00', 1, NULL, 'site',   'entrega',  'Cancelado',           'pix',      NULL);

-- pedido 10 ficou sem item (foi cancelado)
INSERT INTO compraxproduto (id_compra, id_prod, qtd_prod, valor_unitario, observacao) VALUES
(1, 6, 1, 67.90, 'Sabores: Calabresa e Mussarela'),
(1, 9, 1, 19.00, NULL),
(2, 2, 2, 29.00, 'Um deles sem ovo'),
(3, 7, 1, 97.90, 'Sabores: Calabresa, Frango, Portuguesa e Chocolate'),
(4, 1, 1, 15.00, NULL),
(4, 8, 1, 27.00, NULL),
(5, 3, 1, 19.00, 'Sem tomate'),
(6, 5, 2, 22.00, 'Chocolate branco'),
(7, 4, 3, 13.00, NULL),
(9, 10, 1, 22.00, NULL);

-- SELECT 

SELECT * FROM funcionario;
SELECT * FROM cliente;
SELECT * FROM produto;
SELECT * FROM ingredientes;
SELECT * FROM produtoxingrediente;
SELECT * FROM compra;
SELECT * FROM compraxproduto;

-- UPDATE 
-- telefone novo
UPDATE funcionario SET telefone_func = '47992000003' WHERE id_func = 3;
UPDATE funcionario SET telefone_func = '47992000004' WHERE id_func = 4;
UPDATE funcionario SET telefone_func = '47992000005' WHERE id_func = 5;
UPDATE funcionario SET telefone_func = '47992000007' WHERE id_func = 7;
UPDATE funcionario SET telefone_func = '47992000008' WHERE id_func = 8;

-- endereco novo
UPDATE cliente SET endereco_cliente = 'Rua H, 88 - Centro'      WHERE id_cliente = 2;
UPDATE cliente SET endereco_cliente = 'Rua I, 99 - Velha'       WHERE id_cliente = 5;
UPDATE cliente SET endereco_cliente = 'Rua J, 12 - Garcia'      WHERE id_cliente = 8;
UPDATE cliente SET endereco_cliente = 'Rua K, 13 - Itoupava'    WHERE id_cliente = 3;
UPDATE cliente SET endereco_cliente = 'Rua L, 14 - Fortaleza'   WHERE id_cliente = 6;

-- aumento de 2 reais
UPDATE produto SET valor_prod = valor_prod + 2 WHERE id_prod = 1;
UPDATE produto SET valor_prod = valor_prod + 2 WHERE id_prod = 2;
UPDATE produto SET valor_prod = valor_prod + 2 WHERE id_prod = 3;
UPDATE produto SET valor_prod = valor_prod + 2 WHERE id_prod = 4;
UPDATE produto SET valor_prod = valor_prod + 2 WHERE id_prod = 5;

-- reposicao de estoque
UPDATE ingredientes SET quantidade_ingre = quantidade_ingre + 50 WHERE id_ingre = 1;
UPDATE ingredientes SET quantidade_ingre = quantidade_ingre + 40 WHERE id_ingre = 2;
UPDATE ingredientes SET quantidade_ingre = quantidade_ingre + 5  WHERE id_ingre = 3;
UPDATE ingredientes SET quantidade_ingre = quantidade_ingre + 3  WHERE id_ingre = 5;
UPDATE ingredientes SET quantidade_ingre = quantidade_ingre + 10 WHERE id_ingre = 8;

-- ajuste nas receitas
UPDATE produtoxingrediente SET qtd_usada = 0.06 WHERE id_prod = 1 AND id_ingre = 3;
UPDATE produtoxingrediente SET qtd_usada = 0.08 WHERE id_prod = 2 AND id_ingre = 5;
UPDATE produtoxingrediente SET qtd_usada = 0.04 WHERE id_prod = 3 AND id_ingre = 6;
UPDATE produtoxingrediente SET qtd_usada = 0.05 WHERE id_prod = 4 AND id_ingre = 4;
UPDATE produtoxingrediente SET qtd_usada = 0.50 WHERE id_prod = 8 AND id_ingre = 8;

-- status dos pedidos
UPDATE compra SET status_compra = 'Aguardando retirada' WHERE id_compra = 5;
UPDATE compra SET status_compra = 'Pronto'              WHERE id_compra = 6;
UPDATE compra SET status_compra = 'Em preparacao'       WHERE id_compra = 7;
UPDATE compra SET status_compra = 'Confirmado'          WHERE id_compra = 8;
UPDATE compra SET status_compra = 'Confirmado'          WHERE id_compra = 9;

-- mudanca nos itens
UPDATE compraxproduto SET qtd_prod = 2 WHERE id_compra = 1 AND id_prod = 9;
UPDATE compraxproduto SET observacao = 'Bem passado' WHERE id_compra = 4 AND id_prod = 1;
UPDATE compraxproduto SET qtd_prod = 2 WHERE id_compra = 4 AND id_prod = 8;
UPDATE compraxproduto SET observacao = 'Sem tomate e sem alface' WHERE id_compra = 5 AND id_prod = 3;
UPDATE compraxproduto SET qtd_prod = 4 WHERE id_compra = 7 AND id_prod = 4;

-- DELETE 
-- so apaga o que nao ta sendo usado em outra tabela, se nao a FK nao deixa

DELETE FROM compraxproduto      WHERE id_compra = 9 AND id_prod = 10;
DELETE FROM compra              WHERE id_compra = 10;
DELETE FROM produtoxingrediente WHERE id_prod = 7 AND id_ingre = 7;
DELETE FROM produto             WHERE id_prod = 10;
DELETE FROM ingredientes        WHERE id_ingre = 10;
DELETE FROM cliente             WHERE id_cliente = 10;
DELETE FROM funcionario         WHERE id_func = 10;


-- criar uma historia completa