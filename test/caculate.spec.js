const TestOperator = require('test-operator');
const Calculator = require('../calculator');

let calculator = new Calculator();
let testOperator = new TestOperator();

calculator.addOperator('', testOperator);
