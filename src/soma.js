function soma(num1, num2) {
    const parsedNum1 = +num1;
    const parsedNum2 = +num2;

    if (isNaN(parsedNum1) || isNaN(parsedNum2) || typeof parsedNum1 !== 'number' || typeof parsedNum2 !== 'number' || arguments.length !== 2) {
        return "Parâmetros inválidos!";
    }

    return parsedNum1 + parsedNum2;
}

module.exports = soma;