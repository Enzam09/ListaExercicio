
//Criar um programa que mostre qual tipo de triângulo de acordo com seus lados (Equilatero, Isóceles e Escalneo
let lado1 = 500
let lado2 = 506
let lado3 = 504
if (lado1 === lado2 && lado2 === lado3) {
    console.log('Triangulo Equilatero')
} else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
    console.log('Triangulo Isoceles')
} else {
    console.log('Triangulo Escaleno')
}