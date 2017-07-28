const Addition = require('../addition');
const assert = require('chai').assert;

describe('Addition', () => {
    it('#run() should return 4 with 2, 2', () => {
        let addition = new Addition();
        assert.equal(addition.run(2, 2), 4);
    });
});
