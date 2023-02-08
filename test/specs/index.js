import { expect } from 'chai';
import sinon from 'sinon';
import foo from '../../src/index.js';

describe('foo', () => {
    it('should return foo', () => {
        const fooSpy = sinon.spy(foo);

        expect(fooSpy()).to.equal('foo');
        expect(fooSpy.called).to.equal(true);
    });
});
