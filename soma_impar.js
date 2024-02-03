function somaImparesAteN(numero) {
    
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
  
  
  const numeroInformado = 10;
  const resultado = somaImparesAteN(numeroInformado);
  
  if (typeof resultado === 'number') {
    console.log(`A soma dos números ímpares até ${numeroInformado} é: ${resultado}`);
  } else {
    console.log(resultado);
  }
  