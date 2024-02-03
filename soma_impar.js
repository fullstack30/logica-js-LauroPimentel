function somaImparesAteN(numero) {
    if (Number.isInteger(numero) && numero > 0) {
      let somaImpares = 0;
  
      // Itera de 1 até o número informado, somando os números ímpares
      for (let i = 1; i <= numero; i += 2) {
        somaImpares += i;
      }
  
      return somaImpares;
    } else {
      return "Função aceita apenas números inteiros positivos.";
    }
  }
  
  const numeroInformado = 10;
  const resultado = somaImparesAteN(numeroInformado);
  
  if (typeof resultado === 'number') {
    console.log(`A soma dos números ímpares até ${numeroInformado} é: ${resultado}`);
  } else {
    console.log(resultado);
  }
  