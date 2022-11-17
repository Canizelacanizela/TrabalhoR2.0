//VEICULOS

// const uri = 'http://localhost:5000/estacionamento/veiculos';
// const lista = document.querySelector("#lista");
// const vaga = document.querySelector("#vagas");
// const modais = document.querySelector("#modais");
// const modalVagas = document.querySelector("#modalVagas");
// const vagas = document.querySelector("#vagas");
// var data = [];
// var dataV = [];

// function carregar() {
//     const options = { method: 'GET' };

//     fetch(uri, options)
//         .then(resp => resp.json())
//         .then(resp => {
//             data = resp;
//             preecherTabela();
//         })
//         .catch(err => console.error(err));
// }

// function preecherTabela() {
    
//     data.forEach(e => {
//         let l = document.createElement("tr");
//         let placa = document.createElement("td");
//         let tipo = document.createElement("td");
//         let modelo = document.createElement("td");
//         let cor = document.createElement("td");
//         let cpf = document.createElement("td");
//         placa.innerHTML = e.placa;
//         tipo.innerHTML = e.tipo;
//         modelo.innerHTML = e.modelo;
//         cor.innerHTML = e.cor;
//         cpf.innerHTML = e.cpf;
//         l.appendChild(placa);
//         l.appendChild(tipo);
//         l.appendChild(modelo);
//         l.appendChild(cor);
//         l.appendChild(cpf);
//         lista.appendChild(l);
//     });
// }

//CLONE VAGAS

const uri = 'http://localhost:5000/estacionamento/vagas';
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
        let id_vaga = document.createElement("td");
        let status_vaga = document.createElement("td");
        let descricao = document.createElement("td");
        let valor_hora = document.createElement("td");
        id_vaga.innerHTML = e.id_vaga;
        status_vaga.innerHTML = e.status_vaga;
        descricao.innerHTML = e.descricao;
        valor_hora.innerHTML = e.valor_hora;
        l.appendChild(id_vaga);
        l.appendChild(status_vaga);
        l.appendChild(descricao);
        l.appendChild(valor_hora);
        lista.appendChild(l);
    });
}