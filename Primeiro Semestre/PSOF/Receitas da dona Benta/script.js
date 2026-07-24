const url = "https://receitasapi-b-2025.vercel.app"
const receitas = [];

carregarReceitas();

function carregarReceitas(){
    fetch(url + '/receitas')
        .then(Response => Response.json())
        .then(data =>{
            receitas.length = 0;
            receitas.push(...data);
            listarCards();
        })
        .catch(e =>alert('Problemas com a conexão da API')
)};

function listarCards(){
    const container = document.querySelector('main');
    container.innerHTML = '';

    receitas.forEach(receitas =>{
        const card = document.createElement('');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${receitas.nome}</h3>
        <img src="${receitas.img}"alt="${receitas.nome}">
        <p>Custo aproximado: ${receitas.custoAproximado}</p>
        `;
        container.appendChild(card)
    });
}

