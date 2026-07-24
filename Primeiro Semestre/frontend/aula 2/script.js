const modalCliente = document.getElementById("modalCliente");
var clientes = JSON.parse(localStorage.getItem("clientes")) || [];
renderizarTabela();

function salvarDadosLocalmente(){
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

// let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    modalCliente.style.display="block";
}

function fecharModal(){
    document.getElementById("modalCliente").style.display="none";
}

const cadCli = document.getElementById("cadCli")
cadCli.addEventListener("submit", f => {
    f.preventDefault();
    const obj = {
    cpf: cadCli.cpf.value,
    nome: cadCli.nome.value,
    sobrenome: cadCli.sobrenome.value,
    nascimento: cadCli.nascimento.value
    }
    
    //adicionar objetos na lista clientes
    clientes.push(obj);
    renderizarTabela();
    fecharModal();
    cadCli.reset();
    salvarDadosLocalmente();
});

function renderizarTabela(){
    const dados = document.getElementById("dados");
    dados.innerHTML = ""; //limpa todas as linhas da tabela

    //percorrer a lista preenchendo a tabela novamente
    clientes.forEach((c, i) => {
    dados.innerHTML += `
        <tr>
            <td>${c.cpf}</td>
            <td>${c.nome}</td>
            <td>${c.sobrenome}</td>
            <td>${c.nascimento}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    });
}

function excluir(indice){
    clientes.splice(indice, 1)
    renderizarTabela();
    salvarDadosLocalmente();
    window.location.reload();
}


