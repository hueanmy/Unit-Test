class Calculator {

    constructor() {
        this.operators = new Map();
    }

    addOperator(operatorName, operator) {
        this.operators.set(operatorName, operator);
    }

    caculate(operatorName, number1, number2) {
        return this.operators.get(operatorName).run(number1, number2);
    }
}

module.exports = Calculator;
