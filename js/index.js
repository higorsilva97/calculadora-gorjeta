let valorConta = document.getElementById("valorConta");
let porcGorjeta = document.getElementById('porcGorjeta');
let numPessoas = document.getElementById('numPessoas');

function calcular()
{   
    let valorGorjeta =  parseFloat(valorConta.value) * parseFloat(porcGorjeta.value) / 100;
    let totalPagar = parseFloat(valorConta.value) + valorGorjeta;
    console.log(totalPagar);
}

function limpar()
{

}




