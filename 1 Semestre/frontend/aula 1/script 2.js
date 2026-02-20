function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(valor < 150){
        frete = 20;
    }
    
    let compraComFrete = valor + frete;
    
    resultado.innerHTML = `
    Valor do Frete é de R$ ${frete.toFixed(2)} <br>
    Valor final da Compra é de R$ ${compraComFrete.toFixed(2)}
    `;
}