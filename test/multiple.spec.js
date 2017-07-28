const Multiple = require('../multiple');
const assert = require('chai').assert;

describe('Multiple', () => {
    it('#run() should return 12 with 6, 2', () => {
        let multiple = new Multiple();
        assert.equal(multiple.run(6, 2), 12);
    });
});
