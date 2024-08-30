const conta=0;
var deposito=parseFloat(prompt("Qual o valor que deseja depositar?"));
var somaValor=conta+deposito;
var valorConta=parseFloat(prompt("Você tem" +" " +"R$" +somaValor +" " +"em sua conta. digite o valor que deseja sacar:"));
var saque=valorConta;

if(somaValor>=saque){
    console.log("Seu saque foi efetuado com sucesso");
}else{
    console.log("Saldo insufieiente");
}

