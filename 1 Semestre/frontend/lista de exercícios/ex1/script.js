function calcular(){
    let salario = Number(document.getElementById('salario').value);
    let bonus = document.getElementById('bonus');
    

    if(salario > 2000){
        bonus = salario * 0.10;}

       let = salarioComBonus = salario + bonus;

        salariofinal.innerHTML = `
        Bônus de R$ ${bonus.toFixed(2)} <br>
        Salário Final R$ ${salarioComBonus.toFixed(2)}
        `; 
};

function calcularFrete(){

    let valorDaCompra = Number(document.getElementById('valorc').value);
    let frete = document.getElementById('frete');

    if(valorDaCompra >= 150){
        frete = 0;
    } else{
        frete = 20
    }

    let freteFinal = valorDaCompra + frete;

     frete.innerHTML = `
        Valor de R$ ${valorDaCompra.toFixed(2)} <br>
        Frete Final R$ ${freteFinal.toFixed(2)}
        `; 

};

