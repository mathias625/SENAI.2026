function reajustar(){
    let total = Number(document.getElementById('total').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(total > 200){
        desconto = total * 0.05;
    }
    
    let totalComDesconto = total - desconto;
    
    resultado.innerHTML = `
    Valor do Desconto é de R$ ${desconto.toFixed(2)} <br>
    Valor Final de R$ ${totalComDesconto.toFixed(2)}
    `;
}