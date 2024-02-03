// src/soma_impar.js

function soma_impar(numero) {
  if (Number.isInteger(numero) && numero > 0) {
    let somaImpares = 0;

    for (let i = 1; i <= numero; i += 2) {
      somaImpares += i;
    }

    return somaImpares;
  } else {
    return "Função aceita apenas números inteiros positivos.";
  }
}

module.exports = soma_impar;
