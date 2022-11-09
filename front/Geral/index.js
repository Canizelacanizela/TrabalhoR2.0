const uri = 'http://localhost:5000/estacionamento/clientes';
const cadastro = 'http://localhost:5000/estacionamento/cliente';
const del = '/estacionamento/cliente/cpf';
const lista = document.querySelector("#lista");
const mExcluir = document.querySelector("#modalExcluir");
const labelCpf = document.querySelector("#cpfExclui");
var data = [];

function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(resp => resp.json())
        .then(resp => {
            data = resp;
            preecherTabela();
        })
        .catch(err => console.error(err));
}

function preecherTabela() {
    data.forEach(e => {
        let l = document.createElement("tr");
        let excluir = document.createElement("td");
        let cpf = document.createElement("td");
        let nome = document.createElement("td");
        let telefone = document.createElement("td");
        let placa = document.createElement("td");
        let tipo = document.createElement("td");
        let modelo = document.createElement("td");
        let cor = document.createElement("td");
        let id_vaga = document.createElement("td");
       
        excluir.innerHTML = `<img onclick = "preparaExclusao(${e.cpf})" src='../../assets/exclui.png' width='40px' height='40px' />`;
        cpf.innerHTML = e.cpf;
        nome.innerHTML = e.nome;
        telefone.innerHTML = e.telefone;
        placa.innerHTML = e.placa;
        tipo.innerHTML = e.tipo;
        modelo.innerHTML = e.modelo;
        cor.innerHTML = e.cor;
        id_vaga.innerHTML = e.id_vaga;

        l.appendChild(excluir);
        l.appendChild(cpf);
        l.appendChild(nome);
        l.appendChild(telefone);
        l.appendChild(placa);
        l.appendChild(tipo);
        l.appendChild(modelo);
        l.appendChild(cor);
        l.appendChild(id_vaga);
       
        lista.appendChild(l);

    });
}

function preparaExclusao(cpf) {
    mExcluir.setAttribute('style', 'display:flex');
    labelCpf.innerHTML = cpf;
}


function excluir(cpf) {
    const options = {method: 'DELETE'};

fetch('http://localhost:5000/estacionamento/cliente/' + cpf, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}



/* PROBLEMA NO FETCH*/
// function excluir(cpf) {


//     const options = {method: 'DELETE'};

//     fetch('http://localhost:5000/estacionamento/cliente', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));


    
    // fetch('http://localhost:5000/estacionamento/cliente' + "/" + cpf, { "method": "DELETE" })
    //     .then(resp => resp.status)
    //     .then(resp => {
    //         if (resp == 200) {
    //             window.location.reload();
    //         } else {
    //             alert("Erro ao excluir: + " + resp)
    //         }
    //     })
    //     .catch(err => console.error(err));
// }



function cadastrarCliente() {
    //Cria um objeto com os dados dos campos html <input>

    let cpf = document.querySelector("#cpf").value
    let nome = document.querySelector("#nome").value
    let telefone = document.querySelector("#telefone").value


    let placa = document.querySelector("#placa").value
    let tipo =  document.querySelector("#tipo").value
    let modelo = document.querySelector("#modelo").value
    let cor = document.querySelector("#cor").value
    
    let id_vaga = document.querySelector("#id_vaga").value



    let corpo = {
        "cpf": cpf,
        "nome": nome,
        "telefone": telefone,

        "placa": placa,
        "tipo": tipo,
        "modelo": modelo,
        "cor": cor,
        "cpf": cpf,

        "cpf": cpf,
        "placa": placa,
        "id_vaga": id_vaga
        
    }


    if (corpo.cpf.length > 0 && corpo.nome.length > 0 && corpo.telefone.length > 0 && corpo.placa.length > 0 && corpo.tipo.length > 0 && corpo.modelo.length > 0 && corpo.cor.length > 0 && corpo.id_vaga.length > 0) {
    fetch('http://localhost:5000/estacionamento/cliente', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    }).then( res => { return res.json()})
    .then(resp => {
        if(resp != undefined){
            console.log("Parabens");
        }else{
            console.log("Deu errado como sempre");
        }
    });

    
    fetch('http://localhost:5000/estacionamento/veiculo', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    }).then( res => { return res.json()})
    .then(resp => {
        if(resp != undefined){
            console.log("Parabens");
        }else{
            console.log("Deu errado como sempre");
        }
    });

    fetch('http://localhost:5000/estacionamento/PV', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    }).then( res => { return res.json()})
    .then(resp => {
        if(resp != undefined){
            console.log("Parabens");
        }else{
            console.log("Deu errado como sempre");
        }
    });
       
    window.location.reload();


    //Cria outro objeto com os dados da requisição HTTP
    // const options = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' }
    // };
    //Acrescenta o corpo na requisição no formato JSON
    // options.body = JSON.stringify(corpo);
    //Faz efetivamente a requisição ao back-end
//     if (corpo.cpf.length > 0 && corpo.nome.length > 0 && corpo.telefone.length > 0 && corpo.placa.length > 0 && corpo.tipo.length > 0 && corpo.modelo.length > 0 && corpo.cor.length > 0 && corpo.id_vaga.length > 0) {
//         fetch('http://localhost:5000/estacionamento/cliente',options)
//             .then(resp => resp.status)
//             .then(resp => {
//                 if (resp == 201) {
//                     window.location.reload();
//                 } else {
//                     alerta('Erro ao enviar dados ao Banco de dados:' + resp);
//                     window.location.reload();
//                 }
//             })
//             .catch(err => alerta(err));
//     } else {
//         alerta('Preencha os campos obrigatórios');
//     }
}
}

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}