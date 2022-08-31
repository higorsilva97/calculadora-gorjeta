let valorConta = document.getElementById("valorConta");
let porcGorjeta = document.getElementById('porcGorjeta');
let numPessoas = document.getElementById('numPessoas');
let resultados = document.getElementById('resultados')

function calcular()
{   
    let valorGorjeta =  parseFloat(valorConta.value) * parseFloat(porcGorjeta.value) / 100;
    let totalPagar = parseFloat(valorConta.value) + valorGorjeta;
    gorjetasPorPessoas = valorGorjeta / numPessoas.value;
    let totalPorPessoas = totalPagar / numPessoas.value;
    if ((valorConta !== "" ) && (valorConta !== null) && (valorConta !== undefined))
    {
            let resultado = 
            `<div class="resultado">
                <h3 id="result">Resultado:</h3>
                <h3>Gorjetas por pessoas: ${gorjetasPorPessoas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                <h3>Total por pessoas: ${totalPorPessoas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                <h3>Total a pagar: ${totalPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </h3>   
            </div>`

         resultados.innerHTML = resultado;  
        }
        
}

function limpar()
{
    resultados.innerHTML = "";
    porcGorjeta.value = 0;
    numPessoas.value = 1;
    valorConta.value = 0;
    resultados.focus();
}




