function soma(num1, num2) {
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);

    if(isNaN(parsedNum1) || isNaN(parsedNum2)) {
        return "Parâmetros inválidos!";
    }
    return parsedNum1 + parsedNum2
}
module.exports = soma;