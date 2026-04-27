let cadastro = false;


let form = document.getElementById('form-login');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if(nome ===  "" || senha === "" ){
        mensagem.innerHTML = "<div class = 'erro' <p> Prencha todos os campos! </p> </div>";
        return;
    }

    const usuarioCorreto = "barbabranca";
    const senhaCorreta = "barbabranca1234";

    if(nome === usuarioCorreto && senha === senhaCorreta) {

         mensagem.innerHTML = "<div class = 'sucesso' <p> Login feito com Sucesso! </p> </div>";
         //Aqui é caso o usuario coloque o nome correto barbabranca;

    }else{

         mensagem.innerHTML = "<div class = 'erro' <p> Dados Errados! Usuário e Senha estão errados! </p> </div>";
    }

    

    
document.getElementById("form-login").reset();

        
})