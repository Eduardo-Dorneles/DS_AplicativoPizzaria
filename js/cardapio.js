// =====================================================
// CARDÁPIO E CARRINHO
// Monta os produtos na tela, controla o carrinho
// e envia o pedido para o painel.
// =====================================================

// Lista com os produtos escolhidos pelo cliente.
const carrinho = [];

// ----- MONTAGEM DO CARDÁPIO -----

<<<<<<< HEAD
// Desenha os produtos na página a partir do banco, evitando manter uma lista diferente no HTML.
=======
// Cria os cards de todas as categorias do banco.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function carregarCardapio() {
    const categorias = Object.keys(banco);

    for (let i = 0; i < categorias.length; i++) {
        const categoria = categorias[i];
        const fila = document.getElementById("fila-" + categoria);

        // Algumas chaves do banco não são categorias de produto.
        if (!fila) continue;

        const produtos = banco[categoria];

        for (let j = 0; j < produtos.length; j++) {
            const produto = produtos[j];
            const card = document.createElement("div");

            card.className = "card";
            card.innerHTML =
                '<img src="' + produto.imagem + '" alt="' + produto.alt + '">' +
                '<p class="nomeLanche">' + produto.nome + "</p>" +
                '<p class="descricaoLanche">' + produto.descricao + "</p>" +
                '<p class="preçoHambuguer">' + produto.preco + "</p>";

            fila.appendChild(card);
        }
    }
}

// ----- NAVEGAÇÃO DO MENU LATERAL -----

<<<<<<< HEAD
// Liga os links das categorias ao destaque que mostra a seção selecionada.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function iniciarMenuLateral() {
    const itensMenu = document.querySelectorAll(".item-menu");

    for (let i = 0; i < itensMenu.length; i++) {
<<<<<<< HEAD
        // Deixa marcada a seção escolhida para a pessoa saber onde está no cardápio.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
        itensMenu[i].addEventListener("click", function () {
            for (let j = 0; j < itensMenu.length; j++) {
                itensMenu[j].classList.remove("ativo");
            }
            this.classList.add("ativo");
        });
    }
}

// ----- CARROSSÉIS -----

<<<<<<< HEAD
// Desloca a fileira de produtos para dar acesso aos cards que ficaram fora da tela.
=======
// Rola a fila de cards para a esquerda ou para a direita.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function rolarCarrossel(direcao, tipo) {
    const fila = document.getElementById("fila-" + tipo);
    if (!fila) return;

    const distancia = 440;
    const deslocamento = direcao === "prev" ? -distancia : distancia;

    fila.scrollBy({ left: deslocamento, behavior: "smooth" });
}

<<<<<<< HEAD
// Exibe só o tipo de porção escolhido, assim a página não fica com várias listas abertas.
=======
// Mostra o carrossel de porções escolhido e esconde os outros.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function mostrarPorcao(tipo) {
    const carrosseis = document.querySelectorAll(".carrossel-porcoes");

    for (let i = 0; i < carrosseis.length; i++) {
        carrosseis[i].style.display = "none";
    }

    const botoes = document.querySelectorAll(".tipo-porcao");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("ativo");
    }

    const selecionado = document.getElementById("carrossel-" + tipo);
    if (selecionado) {
        selecionado.style.display = "flex";
        selecionado.style.flexDirection = "column";
    }

    const botaoClicado = document.querySelector(".tipo-porcao." + tipo);
    if (botaoClicado) {
        botaoClicado.classList.add("ativo");
    }
}

// ----- CARRINHO -----

<<<<<<< HEAD
// Coloca os controles nos produtos e conecta os cliques e mudanças ao carrinho.
=======
// Prepara os botões + de cada card e liga os eventos do carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function iniciarCarrinho() {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const nome = card.querySelector(".nomeLanche").textContent.trim();
        const preco = card.querySelector(".preçoHambuguer");
        const linhaPreco = document.createElement("div");
        const botao = document.createElement("button");

        linhaPreco.className = "linha-preco";
        botao.type = "button";
        botao.className = "btn-adicionar";
        botao.dataset.acao = "adicionar";
        botao.textContent = "+";
        botao.setAttribute("aria-label", "Adicionar " + nome + " ao pedido");

        preco.replaceWith(linhaPreco);
        linhaPreco.append(preco, botao);
    }

    const menu = document.querySelector(".menuPrincipal");

<<<<<<< HEAD
    // Um único listener no menu trata os botões dos produtos e os de remover do carrinho.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
    menu.addEventListener("click", function (evento) {
        const botao = evento.target.closest("button[data-acao]");
        if (!botao) return;

        if (botao.dataset.acao === "adicionar") {
            adicionarProduto(botao.closest(".card"));
        } else if (botao.dataset.acao === "remover") {
            const item = botao.closest(".item-carrinho");
            removerProduto(item.dataset.nome, Number(item.dataset.preco));
        }
    });

<<<<<<< HEAD
    // Atualiza o carrinho quando a pessoa muda a quantidade pelo campo numérico.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
    document.getElementById("itensCarrinho").addEventListener("change", function (evento) {
        if (!evento.target.matches(".quantidade-carrinho")) return;

        const linha = evento.target.closest(".item-carrinho");
        const quantidade = Number(evento.target.value);

        atualizarQuantidade(linha.dataset.nome, Number(linha.dataset.preco), quantidade);
    });

    document.getElementById("limparCarrinho").addEventListener("click", limparCarrinho);
    document.getElementById("alternarCarrinho").addEventListener("click", alternarCarrinho);
    document.getElementById("finalizarPedido").addEventListener("click", abrirFormularioPedido);

    atualizarResumo();
}

<<<<<<< HEAD
// Abre ou recolhe o carrinho para ele não ocupar espaço quando não estiver em uso.
=======
// Recolhe ou expande o painel do carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function alternarCarrinho() {
    const painel = document.getElementById("pedido");
    const botao = document.getElementById("alternarCarrinho");
    const recolhido = painel.classList.toggle("recolhido");

    botao.textContent = recolhido ? "+" : "\u2212";
    botao.setAttribute("aria-expanded", String(!recolhido));
}

<<<<<<< HEAD
// Transforma o preço que aparece na tela em número, para permitir somar os itens.
=======
// Converte "R$ 20,00" no número 20.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function lerPreco(textoPreco) {
    const numero = textoPreco.replace(/[^\d,]/g, "").replace(",", ".");
    return Number(numero);
}

<<<<<<< HEAD
// Mostra os valores no padrão de reais usado no cardápio e no resumo.
=======
// Formata um número como moeda brasileira.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

<<<<<<< HEAD
// Inclui o produto escolhido; se ele já estiver no carrinho, aumenta a quantidade.
=======
// Adiciona um produto ao carrinho ou aumenta a quantidade.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function adicionarProduto(card) {
    const nome = card.querySelector(".nomeLanche").textContent.trim();
    const preco = lerPreco(card.querySelector(".preçoHambuguer").textContent);

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome === nome && carrinho[i].preco === preco) {
            carrinho[i].quantidade += 1;
            atualizarResumo();
            return;
        }
    }

    carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    atualizarResumo();
}

<<<<<<< HEAD
// Mantém a quantidade do carrinho igual à que foi digitada; zero remove o produto.
=======
// Altera a quantidade de um item. Zero ou menos remove o item.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function atualizarQuantidade(nome, preco, quantidade) {
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome === nome && carrinho[i].preco === preco) {
            if (!Number.isFinite(quantidade) || quantidade <= 0) {
                carrinho.splice(i, 1);
            } else {
                carrinho[i].quantidade = quantidade;
            }
            atualizarResumo();
            return;
        }
    }
}

<<<<<<< HEAD
// Retira do pedido o produto selecionado no botão Remover.
=======
// Remove um item do carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function removerProduto(nome, preco) {
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome === nome && carrinho[i].preco === preco) {
            carrinho.splice(i, 1);
            atualizarResumo();
            return;
        }
    }
}

<<<<<<< HEAD
// Limpa tudo para a pessoa poder começar o pedido novamente.
=======
// Esvazia o carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function limparCarrinho() {
    carrinho.length = 0;
    atualizarResumo();
}

<<<<<<< HEAD
// Atualiza os itens, as quantidades e os totais para a tela acompanhar o carrinho.
=======
// Redesenha a lista, o contador e os valores do carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function atualizarResumo() {
    const lista = document.getElementById("itensCarrinho");
    const contador = document.getElementById("contadorItens");
    const rotulo = document.getElementById("rotuloItens");
    const subtotalElemento = document.getElementById("subtotal");
    const totalElemento = document.getElementById("total");
    const totalCompacto = document.getElementById("totalCompacto");
    const avisoVazio = document.getElementById("carrinhoVazio");
    const botaoFinalizar = document.getElementById("finalizarPedido");

    let quantidadeTotal = 0;
    let subtotal = 0;

    lista.replaceChildren();
    avisoVazio.hidden = carrinho.length > 0;

    for (let i = 0; i < carrinho.length; i++) {
        const produto = carrinho[i];
        quantidadeTotal += produto.quantidade;
        subtotal += produto.preco * produto.quantidade;

        const linha = document.createElement("li");
        linha.className = "item-carrinho";
        linha.dataset.nome = produto.nome;
        linha.dataset.preco = produto.preco;

        const informacoes = document.createElement("div");
        informacoes.className = "informacoes-item";

        const nome = document.createElement("strong");
        nome.textContent = produto.nome;

        const valor = document.createElement("small");
        valor.textContent = formatarMoeda(produto.preco) + " cada";

        informacoes.append(nome, valor);

        const quantidade = document.createElement("input");
        quantidade.className = "quantidade-carrinho";
        quantidade.type = "number";
        quantidade.min = "0";
        quantidade.value = produto.quantidade;
        quantidade.setAttribute("aria-label", "Quantidade de " + produto.nome);

        const remover = document.createElement("button");
        remover.type = "button";
        remover.className = "btn-remover";
        remover.dataset.acao = "remover";
        remover.textContent = "Remover";

        linha.append(informacoes, quantidade, remover);
        lista.append(linha);
    }

    contador.textContent = quantidadeTotal;
    rotulo.textContent = quantidadeTotal === 1 ? "item no carrinho" : "itens no carrinho";
    subtotalElemento.textContent = formatarMoeda(subtotal);
    totalElemento.textContent = formatarMoeda(subtotal);
    totalCompacto.textContent = formatarMoeda(subtotal);

    // O botão de finalizar só aparece quando há itens.
    botaoFinalizar.disabled = carrinho.length === 0;
}

// ----- FINALIZAÇÃO DO PEDIDO -----

<<<<<<< HEAD
// Só pede nome e destino depois que já existe algo para pedir.
=======
// Mostra o formulário de cliente e mesa.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function abrirFormularioPedido() {
    if (carrinho.length === 0) {
        alert("Adicione pelo menos um produto ao pedido.");
        return;
    }

    const formulario = document.getElementById("formFinalizar");
    formulario.hidden = false;
    document.getElementById("clienteFinalizar").focus();
}

<<<<<<< HEAD
// Confere os dados, monta o pedido completo e salva; assim ele aparece nos painéis da equipe.
=======
// Grava o pedido no localStorage e limpa o carrinho.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function finalizarPedido(evento) {
    evento.preventDefault();

    const cliente = document.getElementById("clienteFinalizar").value.trim();
    const mesa = document.getElementById("mesaFinalizar").value.trim();
    const campoMensagem = document.getElementById("mensagemFinalizar");

    // Validação: nome e destino são obrigatórios.
    if (cliente === "" || mesa === "") {
        campoMensagem.textContent = "Informe o nome do cliente e a mesa ou retirada.";
        campoMensagem.className = "mensagem-login erro";
        campoMensagem.hidden = false;
        return;
    }

    // Validação: o carrinho não pode estar vazio.
    if (carrinho.length === 0) {
        campoMensagem.textContent = "O carrinho está vazio.";
        campoMensagem.className = "mensagem-login erro";
        campoMensagem.hidden = false;
        return;
    }

    const pedidos = buscarPedidos();
    let total = 0;
<<<<<<< HEAD
    let quantidadeTotal = 0;
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
    let descricaoProdutos = "";

    // Monta a descrição dos produtos e soma o total.
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco * carrinho[i].quantidade;
<<<<<<< HEAD
        quantidadeTotal += carrinho[i].quantidade;
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed

        if (i > 0) descricaoProdutos += ", ";
        descricaoProdutos += carrinho[i].quantidade + "x " + carrinho[i].nome;
    }

    const novoPedido = {
        id: proximoId(pedidos),
        cliente: cliente,
        produto: descricaoProdutos,
<<<<<<< HEAD
        quantidade: quantidadeTotal,
=======
        quantidade: carrinho.length,
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
        mesa: mesa,
        status: "Aguardando",
        horario: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        total: total
    };

    pedidos.push(novoPedido);
    salvarPedidos(pedidos);

    carrinho.length = 0;
    atualizarResumo();

    document.getElementById("formFinalizar").reset();
    document.getElementById("formFinalizar").hidden = true;

    campoMensagem.textContent = "Pedido #" + novoPedido.id + " enviado para a cozinha!";
    campoMensagem.className = "mensagem-login sucesso";
    campoMensagem.hidden = false;
}

// ----- INICIALIZAÇÃO -----

<<<<<<< HEAD
// Espera o HTML ficar pronto antes de montar o cardápio e ligar os controles.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
document.addEventListener("DOMContentLoaded", function () {
    carregarCardapio();
    iniciarMenuLateral();
    mostrarPorcao("carnes");
    iniciarCarrinho();

<<<<<<< HEAD
    const pedidoDaAtendente = new URLSearchParams(window.location.search).get("origem") === "atendente";
    if (pedidoDaAtendente) {
        document.getElementById("titulo-carrinho").textContent = "Pedido do cliente";
        document.getElementById("rotuloClienteFinalizar").textContent = "Nome do cliente";
        document.getElementById("voltarAtendimento").hidden = false;
    }

=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
    const formulario = document.getElementById("formFinalizar");
    if (formulario) formulario.addEventListener("submit", finalizarPedido);
});