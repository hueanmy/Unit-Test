const Division = require('../division');
const assert = require('chai').assert;

describe('Division', () => {
    it('#run() should return 3 with 6, 2', () => {
        let division = new Division();
        assert.equal(division.run(6, 2), 3);
    });

    it('#run() should throw error: Division by zero with 6, 0', () => {
        let division = new Division();
        assert.throws(() => {
            division.run(6, 0);
        }, 'Division by zero');
    });
});

