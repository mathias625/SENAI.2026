function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let cachback = 0;

    if(valor > 300){
        cachback = valor * 0.05;
    }
    
    let valorComCashback = valor - cachback;
    
    resultado.innerHTML = `
    Valor do Cashback é de R$ ${cachback.toFixed(2)} <br>
    Valor líquido da Compra de R$ ${valorComCashback.toFixed(2)}
    `;
}