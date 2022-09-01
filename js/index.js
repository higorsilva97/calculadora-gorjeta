let valorConta = document.getElementById("valorConta");
let porcGorjeta = document.getElementById('porcGorjeta');
let numPessoas = document.getElementById('numPessoas');
let resultados = document.getElementById('resultados');
let btnCalcular = document.getElementById('btnCalcular');

function calcular()
{   

    let valorGorjeta =  parseFloat(valorConta.value) * parseFloat(porcGorjeta.value) / 100;
    let totalPagar = parseFloat(valorConta.value) + valorGorjeta;
    gorjetasPorPessoas = valorGorjeta / numPessoas.value;
    let totalPorPessoas = totalPagar / numPessoas.value;

    if((valorConta.value == '') || (porcGorjeta.value == '') || (numPessoas.value) == '' ){
        alert('Campo está vazio! ')
    }else{

            if ((parseFloat(valorConta.value) < 0.1) || (parseFloat(porcGorjeta.value) < 0.1) || (parseInt(numPessoas.value) < 0.1))
            {
                alert('Valor negativo!');
            }
            else{
                   // if ((valorConta !== "" ) && (valorConta !== null) && (valorConta !== undefined))
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
        }
}

function limpar()
{
    resultados.innerHTML = "";
    porcGorjeta.value = '';
    numPessoas.value = '';
    valorConta.value = '';
    resultados.focus();
}

numPessoas.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    
        btnCalcular.click();
    }

})

valorConta.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    
        btnCalcular.click();
    }

})
porcGorjeta.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    
        btnCalcular.click();
    }

})






