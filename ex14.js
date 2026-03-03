//Criar um programa que mostre um desconto de 5% para compras maiores que R$100
let preço = 90;
let desconto = preço * 0.05;
let preçoFinal = preço - desconto;
if (preço > 100) {
    console.log('O preço final com desconto é de R$ ' + preçoFinal);
}else if(preço < 100) 
    console.log('O preço final é de R$' + preço);