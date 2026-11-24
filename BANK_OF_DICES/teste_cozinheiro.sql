-- teste do usuario cozinheiro


-- PODE ver os pedidos que tao na fila (2 confirmado e 3 em preparacao)
SELECT * FROM compra WHERE status_compra IN (2, 3);

-- PODE ver os itens dos pedidos
SELECT * FROM compraxproduto;

-- PODE ver o cardapio
SELECT * FROM produto;

-- PODE ver as receitas
SELECT * FROM produtoxingrediente;

-- PODE mudar o status do pedido (3 = em preparacao)
UPDATE compra SET status_compra = 3 WHERE id_compra = 9;

-- NAO PODE mudar o pagamento do pedido
UPDATE compra SET pagamento_compra = 3 WHERE id_compra = 9;

-- NAO PODE ver os clientes
SELECT * FROM cliente;

-- NAO PODE ver os funcionarios
SELECT * FROM funcionario;

-- NAO PODE mudar preco
UPDATE produto SET valor_prod = 1 WHERE id_prod = 1;

-- NAO PODE criar pedido
INSERT INTO compra (id_cliente, origem_compra, tipo_compra, pagamento_compra) VALUES
(1, 'balcao', 2, 1);

-- NAO PODE apagar pedido
DELETE FROM compra WHERE id_compra = 9;
