import { generateHash } from 'tools/section';
import { expect } from 'chai';

describe('Config Section Tools', () => {
	test('generateHash should be a function', () => {
		expect(generateHash).to.be.a('function');
	});

	test('generateHash() should be return a string', () => {
		expect(generateHash()).to.be.a('string');
	});

	test('generateHash(5) should be return string 5 chars', () => {
		expect(generateHash(5)).to.have.length(5);
	});

	test('generateHash(2) should be return string 2 chars', () => {
		expect(generateHash(2)).to.have.length(2);
	});

	test('generateHash(3) should be return string 2 chars', () => {
		expect(generateHash(3)).to.have.length(3);
	});
});
