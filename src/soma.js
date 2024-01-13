function soma(num1, num2) {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!Number.isFinite(parsedNum1) || !Number.isFinite(parsedNum2) || arguments.length !== 2) {
        return "Parâmetros inválidos!";
    }

    return parsedNum1 + parsedNum2;
}

module.exports = soma;