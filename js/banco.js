// =====================================================
// BANCO DE DADOS SIMULADO
// Este arquivo guarda os dados fixos do sistema:
// o cardápio (produtos) e os pedidos de exemplo.
// =====================================================

const banco = {
    // ----- CARDÁPIO -----
    // Cada categoria vira um carrossel na página inicial.
    lanches: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "X-Burguer", nome: "X-Burguer", descricao: "Pão, hambúrguer, presunto e queijo.", preco: "R$ 15,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bacon.jpeg", alt: "X Bacon", nome: "X-Bacon", descricao: "Pão, bacon e ovo, hambúrguer, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 29,00" },
        { imagem: "imgs/img_menu/menu_trad/x-salada.jpeg", alt: "X Salada", nome: "X-Salada", descricao: "Pão, hambúrguer, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 19,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bauru.jpeg", alt: "X Bauru", nome: "X-Bauru", descricao: "Pão, hambúrguer, presunto, queijo, alface e tomate.", preco: "R$ 17,00" },
        { imagem: "imgs/img_menu/menu_trad/x-calabresa.jpeg", alt: "X-Calabresa", nome: "X-Calabresa", descricao: "Pão, calabresa, hambúrguer, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 28,00" },
        { imagem: "imgs/img_menu/menu_trad/x-casa.jpeg", alt: "X-Casa", nome: "X-Casa", descricao: "Pão, hambúrguer, frango, calabresa, bacon e ovo, presunto, queijo, alface, tomate, pepino, milho, ervilha, batata palha e fritas.", preco: "R$ 54,00" },
        { imagem: "imgs/img_menu/menu_trad/x-coração.jpeg", alt: "X-Coração", nome: "X-Coração", descricao: "Pão, coração, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 29,00" },
        { imagem: "imgs/img_menu/menu_trad/x-egg.jpeg", alt: "X-Egg", nome: "X-Egg", descricao: "Pão, hambúrguer, ovo, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 22,00" },
        { imagem: "imgs/img_menu/menu_trad/x-frango.jpeg", alt: "X-Frango", nome: "X-Frango", descricao: "Pão, frango, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 25,00" },
        { imagem: "imgs/img_menu/menu_trad/x-mignon.jpeg", alt: "X-Mignon", nome: "X-Mignon", descricao: "Pão, carne, hambúrguer, presunto, queijo, alface, tomate, pepino, milho, ervilha e batata palha.", preco: "R$ 35,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Misto Quente", nome: "Misto Quente", descricao: "Pão, presunto e queijo.", preco: "R$ 13,00" }
    ],

    lancheDoces: [
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "X-Beijinho", nome: "X-Beijinho", descricao: "Pão, chocolate branco, coco e queijo.", preco: "R$ 24,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-chocolate.jpeg", alt: "X-Chocolate", nome: "X-Chocolate", descricao: "Pão, chocolate preto ou branco e queijo.", preco: "R$ 22,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-sensação.jpeg", alt: "X-Sensação", nome: "X-Sensação", descricao: "Pão, chocolate preto ou branco, morango e queijo.", preco: "R$ 26,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-prestígio.jpeg", alt: "X-Prestígio", nome: "X-Prestígio", descricao: "Pão, chocolate preto, coco e queijo.", preco: "R$ 24,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-doisAmores.jpeg", alt: "X-2 Amores", nome: "X-2 Amores", descricao: "Pão, queijo, chocolate preto, chocolate branco e creme de leite.", preco: "R$ 22,00" }
    ],

    carnes: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Calabresa", nome: "Calabresa", descricao: "Calabresa fatiada, alface, tomate, fritas e pão de alho.", preco: "R$ 47,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bacon.jpeg", alt: "Coração de Frango", nome: "Coração de Frango", descricao: "Coração, fritas, alface, tomate, cebola e pão de alho.", preco: "R$ 55,00" },
        { imagem: "imgs/img_menu/menu_trad/x-salada.jpeg", alt: "Frango à Passarinho", nome: "Frango à Passarinho", descricao: "Frango à passarinho, salada, farofa e fritas.", preco: "R$ 59,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bauru.jpeg", alt: "Frango Picado", nome: "Frango Picado", descricao: "Peito de frango em cubos, fritas, alface, tomate, pepino e pão de alho.", preco: "R$ 49,00" },
        { imagem: "imgs/img_menu/menu_trad/x-calabresa.jpeg", alt: "Porção de Carne", nome: "Porção de Carne", descricao: "Carne de alcatra em cubos, alface, tomate, ovo de codorna, palmito e pão de alho.", preco: "R$ 65,00" },
        { imagem: "imgs/img_menu/menu_trad/x-casa.jpeg", alt: "Bife Acebolado", nome: "Bife Acebolado", descricao: "Arroz, fritas, maionese, farofa, pão com queijo e salada.", preco: "R$ 124,00" },
        { imagem: "imgs/img_menu/menu_trad/x-coração.jpeg", alt: "Bife ao Alho e Óleo", nome: "Bife ao Alho e Óleo", descricao: "Arroz, fritas, maionese, farofa, pão com queijo e salada.", preco: "R$ 124,00" },
        { imagem: "imgs/img_menu/menu_trad/x-egg.jpeg", alt: "Contra Filé", nome: "Contra Filé", descricao: "Arroz, fritas, maionese, farofa, pão com queijo e salada.", preco: "R$ 142,00" },
        { imagem: "imgs/img_menu/menu_trad/x-frango.jpeg", alt: "Chuleta", nome: "Chuleta", descricao: "Arroz, fritas, maionese, farofa, pão com queijo e salada.", preco: "R$ 117,00" },
        { imagem: "imgs/img_menu/menu_trad/x-mignon.jpeg", alt: "Picanha na Chapa", nome: "Picanha na Chapa", descricao: "Arroz, fritas, maionese, farofa, pão com queijo e salada.", preco: "R$ 163,00" }
    ],

    frutosDoMar: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Camarão Pequeno", nome: "Camarão Pequeno à Milanesa", descricao: "À milanesa.", preco: "R$ 97,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bacon.jpeg", alt: "Camarão Médio", nome: "Camarão Médio à Milanesa", descricao: "À milanesa.", preco: "R$ 109,00" },
        { imagem: "imgs/img_menu/menu_trad/x-salada.jpeg", alt: "Lula", nome: "Porção de Lula", descricao: "Porção de lula em anéis.", preco: "R$ 98,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bauru.jpeg", alt: "Isca de Peixe", nome: "Isca de Peixe", descricao: "Iscas de peixe empanadas.", preco: "R$ 64,00" },
        { imagem: "imgs/img_menu/menu_trad/x-calabresa.jpeg", alt: "Tilápia", nome: "Tiras de Tilápia", descricao: "Tiras de tilápia empanadas.", preco: "R$ 102,00" }
    ],

    fritas: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Fritas", nome: "Fritas", descricao: "Batata frita crocante e salgada.", preco: "R$ 27,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bacon.jpeg", alt: "Fritas com Queijo e Bacon", nome: "Fritas com Queijo e Bacon", descricao: "Fritas, queijo derretido, bacon e cebolinha.", preco: "R$ 34,00" },
        { imagem: "imgs/img_menu/menu_trad/x-salada.jpeg", alt: "Fritas Premium", nome: "Fritas com Queijo, Bacon, Cebolinha e Cheddar", descricao: "Fritas, queijo, bacon, cebolinha e cheddar.", preco: "R$ 38,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bauru.jpeg", alt: "Fritas com Calabresa", nome: "Fritas com Queijo, Bacon, Cebolinha e Calabresa", descricao: "Fritas, queijo, bacon, cebolinha e calabresa.", preco: "R$ 39,00" },
        { imagem: "imgs/img_menu/menu_trad/x-calabresa.jpeg", alt: "Polenta", nome: "Polenta", descricao: "Polenta frita e crocante.", preco: "R$ 22,00" },
        { imagem: "imgs/img_menu/menu_trad/x-casa.jpeg", alt: "Polenta Premium", nome: "Polenta com Queijo, Bacon e Cebolinha", descricao: "Polenta frita, queijo, bacon e cebolinha.", preco: "R$ 29,00" },
        { imagem: "imgs/img_menu/menu_trad/x-coração.jpeg", alt: "Frios", nome: "Porção de Frios", descricao: "Queijo, ovos de codorna, pepino, palmito, azeitonas e salame.", preco: "R$ 44,00" }
    ],

    mistas: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Mista Frutos do Mar", nome: "Porção Mista - Frutos do Mar", descricao: "Camarão, lula, isca de peixe, bolinho de peixe, fritas, arroz, farofa, salada e molho.", preco: "R$ 178,00" },
        { imagem: "imgs/img_menu/menu_trad/x-bacon.jpeg", alt: "Mista Tradicional", nome: "Porção Mista - Tradicional", descricao: "Coração, frango, carne, calabresa, fritas, polenta, alface, tomate, ovo de codorna, pepino, palmito e farofa.", preco: "R$ 146,00" }
    ],

    pizzas: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Broto", nome: "Pizza Broto", descricao: "1 sabor, 4 fatias, 20 cm.", preco: "R$ 32,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Pequena", nome: "Pizza Pequena", descricao: "2 sabores, 8 fatias, 30 cm.", preco: "R$ 67,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Média", nome: "Pizza Média", descricao: "3 sabores, 12 fatias, 35 cm.", preco: "R$ 87,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Grande", nome: "Pizza Grande", descricao: "4 sabores, 16 fatias, 40 cm.", preco: "R$ 97,90" }
    ],

    pizzasEspeciais: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Broto Especial", nome: "Pizza Broto Especial", descricao: "1 sabor, 4 fatias, 20 cm. Escolha pelo menos 1 sabor especial.", preco: "R$ 38,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Pequena Especial", nome: "Pizza Pequena Especial", descricao: "2 sabores, 8 fatias, 30 cm. Escolha pelo menos 1 sabor especial.", preco: "R$ 77,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Média Especial", nome: "Pizza Média Especial", descricao: "3 sabores, 12 fatias, 35 cm. Escolha pelo menos 1 sabor especial.", preco: "R$ 97,90" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Pizza Grande Especial", nome: "Pizza Grande Especial", descricao: "4 sabores, 16 fatias, 40 cm. Escolha pelo menos 1 sabor especial.", preco: "R$ 107,90" }
    ],

    bebidas: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Coca-Cola 2 litros", nome: "Coca-Cola - 2L", descricao: "Refrigerante 2 litros.", preco: "R$ 19,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Fanta Laranja 2 litros", nome: "Fanta Laranja - 2L", descricao: "Refrigerante 2 litros.", preco: "R$ 17,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Sprite 2 litros", nome: "Sprite - 2L", descricao: "Refrigerante 2 litros.", preco: "R$ 17,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Guaraná 2 litros", nome: "Guaraná - 2L", descricao: "Refrigerante 2 litros.", preco: "R$ 17,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Suco natural de laranja", nome: "Suco Natural de Laranja", descricao: "Suco natural.", preco: "R$ 14,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Suco de polpa de acerola", nome: "Suco Polpa de Acerola", descricao: "Suco de polpa.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Suco de polpa de manga", nome: "Suco Polpa de Manga", descricao: "Suco de polpa.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Suco de polpa de maracujá", nome: "Suco Polpa de Maracujá", descricao: "Suco de polpa.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Energético Red Bull", nome: "Energético Red Bull", descricao: "Bebida energética.", preco: "R$ 19,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Água sem gás 500 ml", nome: "Água sem Gás", descricao: "Água sem gás 500 ml.", preco: "R$ 5,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Água com gás 500 ml", nome: "Água com Gás", descricao: "Água com gás 500 ml.", preco: "R$ 6,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Água tônica 350 ml", nome: "Água Tônica", descricao: "Água tônica 350 ml.", preco: "R$ 8,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "H2O 500 ml", nome: "H²O", descricao: "H²O 500 ml.", preco: "R$ 8,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Coca-Cola lata 350 ml", nome: "Coca-Cola Lata 350ml", descricao: "Lata 350 ml.", preco: "R$ 7,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Guaraná lata 350 ml", nome: "Guaraná Lata 350ml", descricao: "Lata 350 ml.", preco: "R$ 7,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Sprite lata 350 ml", nome: "Sprite Lata 350ml", descricao: "Lata 350 ml.", preco: "R$ 7,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Schweppes lata 350 ml", nome: "Schweppes Lata 350ml", descricao: "Lata 350 ml.", preco: "R$ 7,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Guaraná 600 ml", nome: "Guaraná 600ml", descricao: "Refrigerante 600 ml.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Fanta Laranja 600 ml", nome: "Fanta Laranja 600ml", descricao: "Refrigerante 600 ml.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Sprite 600 ml", nome: "Sprite 600ml", descricao: "Refrigerante 600 ml.", preco: "R$ 10,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Coca-Cola 600 ml", nome: "Coca-Cola 600ml", descricao: "Refrigerante 600 ml.", preco: "R$ 12,00" }
    ],

    bebidasAlcoolicas: [
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Cerveja Original lata 350 ml", nome: "Cerveja Original Lata - 350ml", descricao: "Lata 350 ml.", preco: "R$ 8,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Cerveja Skol lata 350 ml", nome: "Cerveja Skol Lata - 350ml", descricao: "Lata 350 ml.", preco: "R$ 7,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Caipirinha", nome: "Caipirinha", descricao: "Dose de caipirinha.", preco: "R$ 22,00" },
        { imagem: "imgs/img_menu/menu_trad/x-burguer.jpeg", alt: "Vinho Suave", nome: "Vinho Suave - Garrafa", descricao: "Garrafa.", preco: "R$ 68,00" }
    ],

    sobremesas: [
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça", nome: "Açaí na Taça", descricao: "Somente açaí.", preco: "R$ 22,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça ao leite", nome: "Açaí na Taça ao Leite", descricao: "Açaí, leite Ninho e leite condensado.", preco: "R$ 26,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça com banana", nome: "Açaí na Taça com Banana", descricao: "Açaí, leite Ninho, leite condensado e banana.", preco: "R$ 27,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça com morango", nome: "Açaí na Taça com Morango", descricao: "Açaí, leite Ninho, leite condensado e morango.", preco: "R$ 29,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça com frutas", nome: "Açaí na Taça com Frutas", descricao: "Açaí, leite Ninho, leite condensado, morango, banana e granola.", preco: "R$ 32,00" },
        { imagem: "imgs/img_menu/menu_lancheDoces/x-beijinho.jpeg", alt: "Açaí na taça com paçoca", nome: "Açaí na Taça com Paçoca", descricao: "Açaí, leite Ninho, leite condensado e paçoca.", preco: "R$ 27,00" }
    ],

    // ----- PEDIDOS DE EXEMPLO -----
    // Usados apenas na primeira vez que o sistema abre.
    pedidosIniciais: [
        { id: 1001, cliente: "Mariana", produto: "Pizza Calabresa", quantidade: 1, mesa: "Mesa 02", status: "Em preparo", horario: "19:35", total: 87.9 },
        { id: 1002, cliente: "João", produto: "X-Bacon", quantidade: 2, mesa: "Retirada", status: "Aguardando", horario: "19:42", total: 58.0 },
        { id: 1003, cliente: "Camila", produto: "Pizza Marguerita", quantidade: 1, mesa: "Mesa 05", status: "Pronto", horario: "19:28", total: 87.9 }
    ],

    // ----- USUÁRIOS DO SISTEMA -----
    // Login demonstrativo. Em um sistema real isso ficaria no servidor.
    usuarios: [
        { nome: "admin", senha: "1234", perfil: "Administrador" },
        { nome: "atendente", senha: "1234", perfil: "Atendente" },
        { nome: "cozinha", senha: "1234", perfil: "Cozinheiro" }
    ]
};

// Busca os pedidos já salvos. Se ainda não houver nenhum, usa os exemplos para a tela não começar vazia.
function buscarPedidos() {
    const dadosSalvos = localStorage.getItem("palladares_pedidos");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    localStorage.setItem("palladares_pedidos", JSON.stringify(banco.pedidosIniciais));
    return banco.pedidosIniciais;
}

// Guarda a lista atual para que as outras telas encontrem os mesmos pedidos.
function salvarPedidos(pedidos) {
    localStorage.setItem("palladares_pedidos", JSON.stringify(pedidos));
}

// Usa o maior número já existente e soma um, para cada pedido ganhar seu próprio número.
function proximoId(pedidos) {
    let maior = 1000;

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id > maior) maior = pedidos[i].id;
    }

    return maior + 1;
}
