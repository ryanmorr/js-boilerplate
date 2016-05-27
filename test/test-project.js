import { expect } from 'chai';
import { foo } from '../src/project';

describe('test suite', () => {
    it('test case', () => {
        expect(foo()).to.equal(true);
    });
});
