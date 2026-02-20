function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(valor > 100){
        taxa = valor * 0.1;
    }
    
    let valorComTaxa = valor + taxa;
    
    resultado.innerHTML = `
    Valor do Bonus é de R$ ${taxa.toFixed(2)} <br>
    Valor Final de R$ ${valorComTaxa.toFixed(2)}
    `;
}