const formulario = document.querySelector('form');
const nome = document.getElementById('formGroupExampleInput');
const email = document.getElementById('exampleInputEmail1');
const senha = document.getElementById('exampleInputPassword1');

function cadastrar(){

    fetch("http://localhost:8080/usuarios",
    
    {
        headers:{
            'Accept': "application/json",
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            senha: senha.value
        })
    })
    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})

};

function limparForm(){
    nome.value = '';
    email.value = '';
    senha.value = '';
}


formulario.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrar();
    limparForm();
    

});

