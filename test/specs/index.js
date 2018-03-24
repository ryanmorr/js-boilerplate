import fizzbuzz from '../../src/index';

describe('fizzbuzz', () => {
    it('returns \'Fizz\' when the given param is a multiplier of 3', () => {
        expect(fizzbuzz(3)).to.equal('Fizz');
        expect(fizzbuzz(6)).to.equal('Fizz');
        expect(fizzbuzz(9)).to.equal('Fizz');
    });

    it('returns \'FizzBuzz\' when the given param is a multiplier of 3 and 5', () => {
        expect(fizzbuzz(15)).to.equal('FizzBuzz');
        expect(fizzbuzz(30)).to.equal('FizzBuzz');
        expect(fizzbuzz(45)).to.equal('FizzBuzz');
    });

    it('returns the given number when the number is not a multiplier of 3 or 5', () => {
        expect(fizzbuzz(1)).to.equal(1);
        expect(fizzbuzz(2)).to.equal(2);
        expect(fizzbuzz(4)).to.equal(4);
        expect(fizzbuzz(7)).to.equal(7);
        expect(fizzbuzz(8)).to.equal(8);
    });
});
