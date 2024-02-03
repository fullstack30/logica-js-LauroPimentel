// src/soma_impar.js

function soma_impar(numero) {
    if (!Number.isInteger(numero) || numero <= 0) {
      throw new Error("Função aceita apenas números inteiros positivos.");
    }
  
    let soma = 0;
  
    for (let i = 1; i <= numero; i += 2) {
      soma += i;
    }
  
    return soma;
  }
  
  module.exports = soma_impar;
  
  