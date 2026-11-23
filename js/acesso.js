// =====================================================
// CONTROLE DE ACESSO
// Login, sessão e proteção das páginas internas.
// Os dados ficam no localStorage (apenas demonstração).
// =====================================================

// Nome da chave usada para guardar o usuário logado.
const CHAVE_USUARIO = "palladares_usuario";

// ----- LEITURA E GRAVAÇÃO DA SESSÃO -----

// Recupera quem está usando o sistema; se a sessão estiver vazia ou quebrada, considera que ninguém entrou.
function lerUsuario() {
    const texto = localStorage.getItem(CHAVE_USUARIO);
    if (!texto) return null;

    try {
        return JSON.parse(texto);
    } catch (erro) {
        // Se o conteúdo estiver corrompido, apaga e considera deslogado.
        localStorage.removeItem(CHAVE_USUARIO);
        return null;
    }
}

// Mantém a sessão entre as páginas para não pedir login a cada troca de painel.
function salvarUsuario(usuario) {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

// ----- LOGIN -----

// Compara os dados digitados com os usuários de demonstração cadastrados no banco.
function conferirCredenciais(nome, senha) {
    for (let i = 0; i < banco.usuarios.length; i++) {
        const usuario = banco.usuarios[i];
        if (usuario.nome === nome && usuario.senha === senha) {
            return usuario;
        }
    }
    return null;
}

// Escolhe o painel inicial de acordo com o trabalho de cada pessoa.
function paginaDoPerfil(perfil) {
    if (perfil === "Administrador") return "adm.html";
    if (perfil === "Atendente") return "atendente.html";
    if (perfil === "Cozinheiro") return "cozinha.html";
    return "login.html";
}

// ----- PROTEÇÃO DAS PÁGINAS -----

// Confere se a sessão pode abrir este painel; o administrador pode acessar todos.
function protegerPagina(perfilPermitido) {
    const usuario = lerUsuario();

    // Sem login: volta para a tela de acesso.
    if (!usuario) {
        window.location.href = "login.html";
        return null;
    }

    // O administrador pode abrir qualquer painel; os demais ficam no próprio.
    if (usuario.perfil !== perfilPermitido && usuario.perfil !== "Administrador") {
        window.location.href = paginaDoPerfil(usuario.perfil);
        return null;
    }

    return usuario;
}

// Identifica no painel quem está conectado, para evitar confusão entre os perfis.
function mostrarUsuarioNaTela(usuario) {
    const elemento = document.getElementById("nomeUsuario");
    if (elemento && usuario) {
        elemento.textContent = usuario.nome + " • " + usuario.perfil;
    }
}

// ----- SAIR -----

// Encerra a sessão e troca a página sem deixar o botão Voltar reabrir o painel.
function sairDoSistema() {
    localStorage.removeItem(CHAVE_USUARIO);
    window.location.replace("login.html");
}

// Cuida do botão Voltar: depois de sair, a pessoa não deve voltar a uma tela protegida.
function bloquearBotaoVoltar() {
    window.history.pushState(null, "", window.location.href);

    // Se a sessão terminou, manda para o login; caso contrário, mantém a navegação no painel.
    window.addEventListener("popstate", function () {
        if (!lerUsuario()) {
            window.location.replace("login.html");
        } else {
            window.history.pushState(null, "", window.location.href);
        }
    });
}

// ----- TELA DE LOGIN -----

// Prepara o login apenas nas páginas que têm esse formulário e leva cada pessoa ao painel certo.
function iniciarLogin() {
    const formulario = document.getElementById("formLogin");
    if (!formulario) return;

    const campoMensagem = document.getElementById("mensagemLogin");

    // Se já existe alguém logado, vai direto para a página do perfil.
    const usuarioAtual = lerUsuario();
    if (usuarioAtual) {
        window.location.href = paginaDoPerfil(usuarioAtual.perfil);
        return;
    }

    // Valida o que foi digitado antes de guardar a sessão e abrir um painel.
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nomeLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value;
        const perfil = document.getElementById("perfilLogin").value;

        // Validação 1: campos obrigatórios.
        if (nome === "" || senha === "" || perfil === "") {
            mostrarMensagem(campoMensagem, "Preencha nome, senha e perfil.", "erro");
            return;
        }

        // Validação 2: confere as credenciais.
        const usuario = conferirCredenciais(nome, senha);
        if (!usuario) {
            mostrarMensagem(campoMensagem, "Nome ou senha incorretos.", "erro");
            return;
        }

        // Validação 3: o perfil escolhido precisa ser o do usuário.
        if (usuario.perfil !== perfil) {
            mostrarMensagem(campoMensagem, "Este usuário não pertence ao perfil selecionado.", "erro");
            return;
        }

        // Tudo certo: grava a sessão e redireciona.
        salvarUsuario({ nome: usuario.nome, perfil: usuario.perfil });
        mostrarMensagem(campoMensagem, "Acesso liberado. Abrindo o painel...", "sucesso");

        // Dá tempo para a mensagem de acesso liberado aparecer antes da troca de página.
        setTimeout(function () {
            window.location.href = paginaDoPerfil(usuario.perfil);
        }, 600);
    });
}

// Mostra o retorno da validação no próprio formulário, sem tirar a pessoa da tela.
function mostrarMensagem(elemento, texto, tipo) {
    if (!elemento) return;

    elemento.textContent = texto;
    elemento.className = "mensagem-login " + tipo;
    elemento.hidden = false;
}

// Só procura o formulário de login depois que a página terminou de carregar.
document.addEventListener("DOMContentLoaded", iniciarLogin);