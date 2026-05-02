let cadastro = false;


let form = document.getElementById('form-login');

form.addEventListener('submit', function (e) {


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (nome === "" || senha === "") {
        mensagem.innerHTML = "<div class = 'erro' <p> Prencha todos os campos! </p> </div>";
        return;
    }

    const usuarioCorreto = "barbabranca";
    const senhaCorreta = "barbabranca1234";

    if (nome === usuarioCorreto && senha === senhaCorreta) {

        mensagem.innerHTML = "<div class = 'sucesso'> <p> Login feito com Sucesso! </p> </div>";
        //Aqui é caso o usuario coloque o nome correto barbabranca;

        window.location.href = "https://gabrielribeiro-code.github.io/tela_forum_personagem/public/main.html";

    } else {

        mensagem.innerHTML = "<div class = 'erro'> <p> Dados Errados! Usuário e Senha estão errados! </p> </div>";
    }




    document.getElementById("form-login").reset();
});

//lógica para criar um comentário na aba de discussões

function enviarComentario() {

    let texto = document.getElementById("comentario").value;
    //aqui nos pegamos o texto da outra pagina pelo id

    if (texto == "") return;
    // aqui se nao colocarem nada, faz nada

    let novo = document.createElement("p");
    //aqui é para criar um comentário

    novo.innerText = texto;
    //aqui colocamos o texto dentro

    document.getElementById("area-comentarios").appendChild(novo);
    // aqui é para adicionar na tela 
    // O appendChild serve justamente para jogar na tela

    document.getElementById("comentario").value = "";
    // aqui é para limpar o comentário.

}


