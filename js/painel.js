// =====================================================
// PAINEL ADMINISTRATIVO
// Pedidos, indicadores e permissões de cada perfil.
// =====================================================

// Escolhe a cor da etiqueta de acordo com o andamento do pedido.
function classeStatus(status) {
    if (status === "Em preparo") return "preparo";
    if (status === "Pronto" || status === "Entregue") return "pronto";
    return "";
}

// ----- INDICADORES DO ADMINISTRADOR -----

// Atualiza os números e a lista do administrador usando os pedidos mais recentes.
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

// Mostra à cozinha os pedidos que ainda não foram entregues e o próximo passo de cada um.
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

// Move o pedido para a próxima etapa para a equipe acompanhar o preparo.
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

// Atualiza a lista da atendente e oferece a entrega quando a cozinha marca como pronto.
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

// Só registra a entrega depois que o pedido está pronto.
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

// ----- EDITAR E EXCLUIR PEDIDO -----

// Permite corrigir o nome ou o destino sem precisar apagar e refazer o pedido.
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

// Remove um pedido da lista, mas primeiro confirma a ação para evitar apagar por engano.
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

// Confere o acesso e prepara a tela certa para o perfil que entrou.
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
document.addEventListener("DOMContentLoaded", iniciarPainel);
function iniciarPainel() {
    const pagina = document.body.dataset.pagina;

    let usuario = null;
    if (pagina === "adm") {
        usuario = protegerPagina("Administrador");
    } else if (pagina === "cozinha") {
        usuario = protegerPagina("Cozinheiro");
    } else if (pagina === "atendente") {
        usuario = protegerPagina("Atendente");
    }

    if (!usuario) return;

    mostrarUsuarioNaTela(usuario);
    bloquearBotaoVoltar();

    if (pagina === "adm") atualizarAdministrador();
    if (pagina === "cozinha") atualizarCozinha();
    if (pagina === "atendente") atualizarAtendente();

    // NOVO: força um redesenho quando o Firestore terminar de carregar
    if (typeof iniciarSincronizacao === "function") {
        iniciarSincronizacao();
    }
}