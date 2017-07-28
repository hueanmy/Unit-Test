class Division {
    run(number1, number2) {
        if (number2 !== 0){
            return number1 / number2;
        }
        throw new Error('Division by zero');
    }
}

module.exports = Division;
