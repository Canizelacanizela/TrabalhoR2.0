const uri = 'http://localhost:5000/estacionamento/PVs';
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
        let cpf = document.createElement("td");
        let placa = document.createElement("td");
        let id_vaga = document.createElement("td");
        let entrada = document.createElement("td");
        cpf.innerHTML = e.cpf;
        placa.innerHTML = e.placa;
        id_vaga.innerHTML = e.id_vaga;
        entrada.innerHTML = e.entrada.toLocaleString('pt-BR', { timeZone: 'UTC' }).split("T")[0];
        l.appendChild(cpf);
        l.appendChild(placa);
        l.appendChild(id_vaga);
        l.appendChild(entrada);
        lista.appendChild(l);
    });
}

