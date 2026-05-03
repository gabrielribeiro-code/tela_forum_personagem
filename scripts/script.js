let form = document.getElementById('form-login');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        let mensagem = document.getElementById("mensagem");

        mensagem.innerHTML = "";

        if (nome === "" || senha === "") {
            mensagem.innerHTML = "<div class='erro'><p>Preencha todos os campos!</p></div>";
            return;
        }

        const usuarioCorreto = "barbabranca";
        const senhaCorreta = "barbabranca1234";

        if (nome === usuarioCorreto && senha === senhaCorreta) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login feito com Sucesso!</p></div>";
            window.location.href = "main.html";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados Errados! Usuário e Senha estão errados!</p></div>";
        }

        form.reset();
    });
}

function enviarComentario() {
    let inputNome = document.getElementById("nome-usuario");
    let inputComentario = document.getElementById("comentario");

    let nome = inputNome.value.trim();
    let texto = inputComentario.value.trim();

    if (nome === "" || texto === "") {
        return;
    }

    let novaDiscussao = document.createElement("div");
    novaDiscussao.className = "discussao mb-3 w-100";

    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerHTML = `<strong>${nome} :</strong> ${texto}`;

    novaDiscussao.appendChild(novoParagrafo);
    document.getElementById("area-comentarios").appendChild(novaDiscussao);

    inputNome.value = "";
    inputComentario.value = "";
}