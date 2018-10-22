import { expect } from 'chai';
import { style } from 'style/default';

describe('style() default', () => {
    test('should be function', () => {
        expect(style).to.be.a('function');
    });
});
