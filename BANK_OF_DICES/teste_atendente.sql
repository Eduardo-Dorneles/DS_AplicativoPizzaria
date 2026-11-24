-- teste do usuario atendente
USE Palladares;

-- PODE ver o cardapio e os pedidos
SELECT * FROM produto;

-- PODE
SELECT * FROM compra;

-- PODE cadastrar cliente novo
INSERT INTO cliente (nome_cliente, telefone_cliente, endereco_cliente) VALUES
('Cliente Teste', '47999999999', 'Rua Teste, 1');

-- PODE mudar o endereco do cliente
UPDATE cliente SET endereco_cliente = 'Rua Nova, 2' WHERE telefone_cliente = '47999999999';

-- PODE lancar um pedido no balcao
INSERT INTO compra (id_cliente, id_func, origem_compra, tipo_compra, pagamento_compra) VALUES
(1, 3, 'balcao', 2, 1);

-- PODE colocar item no pedido que acabou de criar (LAST_INSERT_ID pega o id dele)
INSERT INTO compraxproduto (id_compra, id_prod, qtd_prod, valor_unitario) VALUES
(LAST_INSERT_ID(), 1, 1, 17.00);

-- PODE mudar o status do pedido
UPDATE compra SET status_compra = 2 WHERE id_compra = 9;

-- NAO PODE mudar preco
UPDATE produto SET valor_prod = 1 WHERE id_prod = 1;

-- NAO PODE mexer no estoque
UPDATE ingredientes SET quantidade_ingre = 0 WHERE id_ingre = 1;

-- NAO PODE cadastrar funcionario
INSERT INTO funcionario (nome_func, telefone_func, cargo_func, login_func, senha_func) VALUES
('Intruso', '47900000000', 1, 'intruso', SHA2('123', 256));

-- NAO PODE apagar pedido
DELETE FROM compra WHERE id_compra = 9;

-- NAO PODE apagar cliente
DELETE FROM cliente WHERE id_cliente = 9;

-- NAO PODE apagar tabela
DROP TABLE cliente;
