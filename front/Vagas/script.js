//VEICULOS

const uri = 'http://localhost:5000/estacionamento/veiculos';
const lista = document.querySelector("#lista");
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
        let placa = document.createElement("td");
        let tipo = document.createElement("td");
        let modelo = document.createElement("td");
        let cor = document.createElement("td");
        let cpf = document.createElement("td");
        placa.innerHTML = e.placa;
        tipo.innerHTML = e.tipo;
        modelo.innerHTML = e.modelo;
        cor.innerHTML = e.cor;
        cpf.innerHTML = e.cpf;
        l.appendChild(placa);
        l.appendChild(tipo);
        l.appendChild(modelo);
        l.appendChild(cor);
        l.appendChild(cpf);
        lista.appendChild(l);
    });
}

function cadastrarCliente() {
    //Cria um objeto com os dados dos campos html <input>
    let corpo = {
        
        "placa": document.querySelector("#placa").value,
        "tipo": document.querySelector("#tipo").value,
        "modelo": document.querySelector("#modelo").value,
        "cor": document.querySelector("#cor").value,
        "cpf": document.querySelector("#cpf").value
        
    }
    //Cria outro objeto com os dados da requisição HTTP
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    //Acrescenta o corpo na requisição no formato JSON
    options.body = JSON.stringify(corpo);
    //Faz efetivamente a requisição ao back-end
    if (corpo.placa.length > 0 && corpo.tipo.length > 0 && corpo.modelo.length > 0 && corpo.cor.length > 0 && corpo.cpf.length > 0) {
        fetch('http://localhost:5000/estacionamento/veiculo', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    window.location.reload();
                } else {
                    alerta('Erro ao enviar dados ao Banco de dados:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alerta(err));
    } else {
        alerta('Preencha os campos obrigatórios');
    }
}

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}