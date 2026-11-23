// =====================================================
// PAINEL ADMINISTRATIVO
// Pedidos, indicadores e permissões de cada perfil.
// =====================================================

<<<<<<< HEAD
// Escolhe a cor da etiqueta de acordo com o andamento do pedido.
=======
// ----- ARMAZENAMENTO DOS PEDIDOS -----

// Lê os pedidos do localStorage. Na primeira vez, cria os de exemplo.
function buscarPedidos() {
    const dadosSalvos = localStorage.getItem("palladares_pedidos");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    localStorage.setItem("palladares_pedidos", JSON.stringify(banco.pedidosIniciais));
    return banco.pedidosIniciais;
}

// Grava a lista de pedidos no localStorage.
function salvarPedidos(pedidos) {
    localStorage.setItem("palladares_pedidos", JSON.stringify(pedidos));
}

// Calcula o próximo número de pedido.
function proximoId(pedidos) {
    let maior = 1000;

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id > maior) maior = pedidos[i].id;
    }

    return maior + 1;
}

// Devolve a classe CSS usada na etiqueta de status.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function classeStatus(status) {
    if (status === "Em preparo") return "preparo";
    if (status === "Pronto" || status === "Entregue") return "pronto";
    return "";
}

// ----- INDICADORES DO ADMINISTRADOR -----

<<<<<<< HEAD
// Atualiza os números e a lista do administrador usando os pedidos mais recentes.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function atualizarAdministrador() {
    const pedidos = buscarPedidos();

    let emPreparo = 0;
    let aguardando = 0;
    let prontos = 0;

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].status === "Em preparo") emPreparo++;
        if (pedidos[i].status === "Aguardando") aguardando++;
        if (pedidos[i].status === "Pronto") prontos++;
    }

    document.getElementById("totalPedidos").textContent = pedidos.length;
    document.getElementById("pedidosPreparo").textContent = emPreparo;
    document.getElementById("pedidosAguardando").textContent = aguardando;
    document.getElementById("pedidosProntos").textContent = prontos;

    const lista = document.getElementById("listaPedidosAdm");
    lista.innerHTML = "";

    // Mostra do pedido mais novo para o mais antigo.
    for (let i = pedidos.length - 1; i >= 0; i--) {
        const pedido = pedidos[i];
        const linha = document.createElement("tr");

        linha.innerHTML =
            "<td>#" + pedido.id + "</td>" +
            "<td>" + pedido.cliente + "</td>" +
            "<td>" + pedido.produto + "</td>" +
            "<td>" + pedido.quantidade + "</td>" +
            '<td><span class="status ' + classeStatus(pedido.status) + '">' + pedido.status + "</span></td>" +
            "<td>" + pedido.horario + "</td>" +
            "<td>" +
                '<button class="botao-tabela" onclick="editarPedido(' + pedido.id + ')">Editar</button>' +
                '<button class="botao-tabela excluir" onclick="excluirPedido(' + pedido.id + ')">Excluir</button>' +
            "</td>";

        lista.appendChild(linha);
    }
}

// ----- COZINHA -----

<<<<<<< HEAD
// Mostra à cozinha os pedidos que ainda não foram entregues e o próximo passo de cada um.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function atualizarCozinha() {
    const pedidos = buscarPedidos();
    const lista = document.getElementById("pedidosCozinha");
    lista.innerHTML = "";

    let encontrou = false;

    for (let i = 0; i < pedidos.length; i++) {
        const pedido = pedidos[i];

        // A cozinha só vê o que ainda não foi entregue.
        if (pedido.status === "Entregue") continue;

        encontrou = true;

        const card = document.createElement("article");
        card.className = "pedido-card";

        const textoBotao = pedido.status === "Aguardando" ? "Iniciar preparo" : "Marcar como pronto";

        card.innerHTML =
            "<h3>Pedido #" + pedido.id + "</h3>" +
            "<p><strong>" + pedido.produto + "</strong></p>" +
            "<p>Cliente: " + pedido.cliente + "</p>" +
            "<p>Destino: " + pedido.mesa + "</p>" +
            "<p>Horário: " + pedido.horario + "</p>" +
            '<p>Status: <span class="status ' + classeStatus(pedido.status) + '">' + pedido.status + "</span></p>" +
            '<div class="pedido-acoes">' +
                '<button class="botao-painel" onclick="avancarPedido(' + pedido.id + ')">' + textoBotao + "</button>" +
            "</div>";

        lista.appendChild(card);
    }

    if (!encontrou) {
        lista.innerHTML = '<p class="mensagem-vazia">Não há pedidos pendentes no momento.</p>';
    }
}

<<<<<<< HEAD
// Move o pedido para a próxima etapa para a equipe acompanhar o preparo.
=======
// Avança o status: Aguardando → Em preparo → Pronto.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function avancarPedido(id) {
    const pedidos = buscarPedidos();

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id === id) {
            if (pedidos[i].status === "Aguardando") {
                pedidos[i].status = "Em preparo";
            } else if (pedidos[i].status === "Em preparo") {
                pedidos[i].status = "Pronto";
            }

            salvarPedidos(pedidos);
            atualizarCozinha();
            return;
        }
    }
}

// ----- ATENDIMENTO -----

<<<<<<< HEAD
// Atualiza a lista da atendente e oferece a entrega quando a cozinha marca como pronto.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function atualizarAtendente() {
    const pedidos = buscarPedidos();
    const lista = document.getElementById("pedidosAtendente");
    lista.innerHTML = "";

    for (let i = pedidos.length - 1; i >= 0; i--) {
        const pedido = pedidos[i];
        const linha = document.createElement("tr");

        let acao = "-";
        if (pedido.status === "Pronto") {
            acao = '<button class="botao-tabela" onclick="entregarPedido(' + pedido.id + ')">Entregar</button>';
        }

        linha.innerHTML =
            "<td>#" + pedido.id + "</td>" +
            "<td>" + pedido.cliente + "</td>" +
            "<td>" + pedido.produto + "</td>" +
            "<td>" + pedido.mesa + "</td>" +
            '<td><span class="status ' + classeStatus(pedido.status) + '">' + pedido.status + "</span></td>" +
            "<td>" + acao + "</td>";

        lista.appendChild(linha);
    }
}

<<<<<<< HEAD
// Só registra a entrega depois que o pedido está pronto.
=======
// Marca o pedido como entregue.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function entregarPedido(id) {
    const pedidos = buscarPedidos();

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id === id) {
            if (pedidos[i].status !== "Pronto") {
                alert("Este pedido ainda não está pronto.");
                return;
            }

            pedidos[i].status = "Entregue";
            salvarPedidos(pedidos);
            atualizarAtendente();
            return;
        }
    }
}

<<<<<<< HEAD
// ----- EDITAR E EXCLUIR PEDIDO -----

// Permite corrigir o nome ou o destino sem precisar apagar e refazer o pedido.
=======
// ----- CADASTRO DE PEDIDO PELO ATENDENTE -----

function cadastrarPedido(evento) {
    evento.preventDefault();

    const cliente = document.getElementById("clientePedido").value.trim();
    const produto = document.getElementById("produtoPedido").value.trim();
    const quantidade = Number(document.getElementById("quantidadePedido").value);
    const mesa = document.getElementById("mesaPedido").value.trim();
    const campoMensagem = document.getElementById("mensagemPedido");

    // Validação 1: campos obrigatórios.
    if (cliente === "" || produto === "" || mesa === "") {
        mostrarMensagemPedido(campoMensagem, "Preencha cliente, produto e destino.", "erro");
        return;
    }

    // Validação 2: quantidade precisa ser um número inteiro positivo.
    if (!Number.isInteger(quantidade) || quantidade < 1) {
        mostrarMensagemPedido(campoMensagem, "A quantidade deve ser um número inteiro maior que zero.", "erro");
        return;
    }

    // Validação 3: limite de itens por pedido (regra da casa).
    if (quantidade > 20) {
        mostrarMensagemPedido(campoMensagem, "O limite é de 20 unidades por item em um único pedido.", "erro");
        return;
    }

    const pedidos = buscarPedidos();

    // Validação 4: evita pedido duplicado do mesmo cliente na mesma mesa.
    for (let i = 0; i < pedidos.length; i++) {
        const p = pedidos[i];

        if (
            p.cliente.toLowerCase() === cliente.toLowerCase() &&
            p.mesa.toLowerCase() === mesa.toLowerCase() &&
            p.produto.toLowerCase() === produto.toLowerCase() &&
            p.status !== "Entregue"
        ) {
            mostrarMensagemPedido(campoMensagem, "Já existe um pedido igual em aberto para este cliente.", "erro");
            return;
        }
    }

    const novoPedido = {
        id: proximoId(pedidos),
        cliente: cliente,
        produto: produto,
        quantidade: quantidade,
        mesa: mesa,
        status: "Aguardando",
        horario: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        total: 0
    };

    pedidos.push(novoPedido);
    salvarPedidos(pedidos);

    evento.target.reset();
    document.getElementById("quantidadePedido").value = 1;

    atualizarAtendente();
    mostrarMensagemPedido(campoMensagem, "Pedido #" + novoPedido.id + " registrado e enviado para a cozinha.", "sucesso");
}

// Escreve uma mensagem de erro ou sucesso no formulário de pedido.
function mostrarMensagemPedido(elemento, texto, tipo) {
    if (!elemento) return;

    elemento.textContent = texto;
    elemento.className = "mensagem-login " + tipo;
    elemento.hidden = false;
}

// ----- EDITAR E EXCLUIR PEDIDO -----

// Abre a edição simples do cliente e do destino de um pedido.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function editarPedido(id) {
    const pedidos = buscarPedidos();

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id !== id) continue;

        const novoCliente = prompt("Nome do cliente:", pedidos[i].cliente);
        if (novoCliente === null) return;

        const novoDestino = prompt("Mesa ou destino:", pedidos[i].mesa);
        if (novoDestino === null) return;

        if (novoCliente.trim() === "" || novoDestino.trim() === "") {
            alert("Cliente e destino não podem ficar vazios.");
            return;
        }

        pedidos[i].cliente = novoCliente.trim();
        pedidos[i].mesa = novoDestino.trim();

        salvarPedidos(pedidos);
        atualizarAdministrador();
        alert("Pedido #" + id + " atualizado.");
        return;
    }
}

<<<<<<< HEAD
// Remove um pedido da lista, mas primeiro confirma a ação para evitar apagar por engano.
=======
// Exclui um pedido depois de pedir confirmação.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function excluirPedido(id) {
    const confirmar = confirm("Deseja realmente excluir o pedido #" + id + "?");
    if (!confirmar) return;

    const pedidos = buscarPedidos();

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id === id) {
            pedidos.splice(i, 1);
            salvarPedidos(pedidos);
            atualizarAdministrador();
            return;
        }
    }
}

// ----- INICIALIZAÇÃO DE CADA PÁGINA -----

<<<<<<< HEAD
// Confere o acesso e prepara a tela certa para o perfil que entrou.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function iniciarPainel() {
    const pagina = document.body.dataset.pagina;

    // Cada página exige um perfil diferente.
    let usuario = null;

    if (pagina === "adm") {
        usuario = protegerPagina("Administrador");
    } else if (pagina === "cozinha") {
        usuario = protegerPagina("Cozinheiro");
    } else if (pagina === "atendente") {
        usuario = protegerPagina("Atendente");
    }

    // Se o perfil não bate, protegerPagina já redirecionou.
    if (!usuario) return;

    mostrarUsuarioNaTela(usuario);
    bloquearBotaoVoltar();

    if (pagina === "adm") atualizarAdministrador();
    if (pagina === "cozinha") atualizarCozinha();
    if (pagina === "atendente") {
<<<<<<< HEAD
        atualizarAtendente();
    }

    // Atualiza esta tela quando outra aba salva um pedido ou muda seu andamento.
    window.addEventListener("storage", function (evento) {
        if (evento.key !== "palladares_pedidos") return;

        if (pagina === "adm") atualizarAdministrador();
        if (pagina === "cozinha") atualizarCozinha();
        if (pagina === "atendente") atualizarAtendente();
    });
}

// Espera o HTML carregar antes de conferir o acesso e montar o painel.
=======
        const formulario = document.getElementById("formPedido");
        if (formulario) formulario.addEventListener("submit", cadastrarPedido);
        atualizarAtendente();
    }
}

>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
document.addEventListener("DOMContentLoaded", iniciarPainel);