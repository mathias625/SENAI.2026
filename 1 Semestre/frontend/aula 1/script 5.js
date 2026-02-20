function reajustar(){
    let dias = Number(document.getElementById('dias').value);
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dias > 0){
        multa = mensalidade * 0.02;
    }
    
    let mensalidadeComMulta = mensalidade + multa;
    
    resultado.innerHTML = `
    Valor da Multa é de R$ ${multa.toFixed(2)} <br>
    Valor Final de R$ ${mensalidadeComMulta.toFixed(2)}
    `;
}