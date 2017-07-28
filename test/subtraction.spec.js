const Subtraction = require('../subtraction');
const assert = require('chai').assert;

describe('Subtraction', () => {
    it('#run() should return 4 with 6, 2', () => {
        let subtraction = new Subtraction();
        assert.equal(subtraction.run(6, 2), 4);
    });
});
