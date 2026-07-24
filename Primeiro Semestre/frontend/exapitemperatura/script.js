const key = "960296abdfd0d420c1b6bd2f5430d36e";

const inputBusca = document.getElementById('busca');
const container = document.getElementById('grid-musicas');

inputBusca.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        const cidade = inputBusca.value;
        if(cidade) buscarCidade(cidade);
    }
});

async function buscarCidade(cidade){
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then(resposta => resposta.json());

    exibirResultados(dados);
}

function exibirResultados(dados){
    const card = document.createElement('div');
    card.className = 'card-music';

    card.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png">
        <h3>${dados.name}</h3>
        <p>${Math.floor(dados.main.temp)}°C</p>
        <p>${dados.weather[0].description}</p>
        <p>Umidade: ${dados.main.humidity}%</p>
    `;

    container.appendChild(card);
}