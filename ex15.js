//criar um programa que classifique uma pessoa como criança, adolescente ou adulto de acordo com a idade
let idade = 17
if (idade >= 18) {
   console.log('adulto')
} else if(idade >= 13 && idade <= 17) {
    console.log('adolescente');
}else {
    console.log('Criança')
}