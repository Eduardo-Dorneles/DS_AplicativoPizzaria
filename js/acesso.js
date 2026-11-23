// =====================================================
// CONTROLE DE ACESSO
// Login, sessão e proteção das páginas internas.
// Os dados ficam no localStorage (apenas demonstração).
// =====================================================

// Nome da chave usada para guardar o usuário logado.
const CHAVE_USUARIO = "palladares_usuario";

// ----- LEITURA E GRAVAÇÃO DA SESSÃO -----

<<<<<<< HEAD
// Recupera quem está usando o sistema; se a sessão estiver vazia ou quebrada, considera que ninguém entrou.
=======
// Devolve o usuário logado ou null se ninguém estiver logado.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
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

<<<<<<< HEAD
// Mantém a sessão entre as páginas para não pedir login a cada troca de painel.
=======
// Guarda o usuário logado no localStorage.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function salvarUsuario(usuario) {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

// ----- LOGIN -----

<<<<<<< HEAD
// Compara os dados digitados com os usuários de demonstração cadastrados no banco.
=======
// Confere nome e senha na lista de usuários do banco.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function conferirCredenciais(nome, senha) {
    for (let i = 0; i < banco.usuarios.length; i++) {
        const usuario = banco.usuarios[i];
        if (usuario.nome === nome && usuario.senha === senha) {
            return usuario;
        }
    }
    return null;
}

<<<<<<< HEAD
// Escolhe o painel inicial de acordo com o trabalho de cada pessoa.
=======
// Devolve o nome da página inicial de cada perfil.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function paginaDoPerfil(perfil) {
    if (perfil === "Administrador") return "adm.html";
    if (perfil === "Atendente") return "atendente.html";
    if (perfil === "Cozinheiro") return "cozinha.html";
    return "login.html";
}

// ----- PROTEÇÃO DAS PÁGINAS -----

<<<<<<< HEAD
// Confere se a sessão pode abrir este painel; o administrador pode acessar todos.
=======
// Verifica se o usuário logado pode abrir a página atual.
// perfilPermitido é o perfil que aquela página aceita.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
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

<<<<<<< HEAD
// Identifica no painel quem está conectado, para evitar confusão entre os perfis.
=======
// Mostra o nome e o perfil no canto superior das telas internas.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function mostrarUsuarioNaTela(usuario) {
    const elemento = document.getElementById("nomeUsuario");
    if (elemento && usuario) {
        elemento.textContent = usuario.nome + " • " + usuario.perfil;
    }
}

// ----- SAIR -----

<<<<<<< HEAD
// Encerra a sessão e troca a página sem deixar o botão Voltar reabrir o painel.
=======
// Encerra a sessão e volta para o login.
// O replace() impede que o botão Voltar reabra a página interna.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function sairDoSistema() {
    localStorage.removeItem(CHAVE_USUARIO);
    window.location.replace("login.html");
}

<<<<<<< HEAD
// Cuida do botão Voltar: depois de sair, a pessoa não deve voltar a uma tela protegida.
function bloquearBotaoVoltar() {
    window.history.pushState(null, "", window.location.href);

    // Se a sessão terminou, manda para o login; caso contrário, mantém a navegação no painel.
=======
// Impede que o botão Voltar do navegador mostre uma página
// interna depois que o usuário saiu.
function bloquearBotaoVoltar() {
    window.history.pushState(null, "", window.location.href);

>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
    window.addEventListener("popstate", function () {
        if (!lerUsuario()) {
            window.location.replace("login.html");
        } else {
            window.history.pushState(null, "", window.location.href);
        }
    });
}

// ----- TELA DE LOGIN -----

<<<<<<< HEAD
// Prepara o login apenas nas páginas que têm esse formulário e leva cada pessoa ao painel certo.
=======
// Liga o formulário de login quando ele existe na página.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
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

<<<<<<< HEAD
    // Valida o que foi digitado antes de guardar a sessão e abrir um painel.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
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

<<<<<<< HEAD
        // Dá tempo para a mensagem de acesso liberado aparecer antes da troca de página.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
        setTimeout(function () {
            window.location.href = paginaDoPerfil(usuario.perfil);
        }, 600);
    });
}

<<<<<<< HEAD
// Mostra o retorno da validação no próprio formulário, sem tirar a pessoa da tela.
=======
// Escreve uma mensagem de erro ou sucesso na tela de login.
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
function mostrarMensagem(elemento, texto, tipo) {
    if (!elemento) return;

    elemento.textContent = texto;
    elemento.className = "mensagem-login " + tipo;
    elemento.hidden = false;
}

<<<<<<< HEAD
// Só procura o formulário de login depois que a página terminou de carregar.
=======
>>>>>>> b201a2d23691c18c54bb27515be5657edbc584ed
document.addEventListener("DOMContentLoaded", iniciarLogin);