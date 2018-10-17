import global from 'tools/global';
import { fontFace } from 'style/fontface';
import { expect } from 'chai';

describe('Config Global', () => {
    test('should be a object', () => {
        expect(global).to.be.a('object');
    });

    test('should be include any colors', () => {
        const colors = {
            primaryColor: '#2B3B46'
        };

        expect(global).to.include(colors);
    });

    test('should be include font', () => {
        const fonts = {
            black: 'din-black',
            bold: 'din-bold',
            regular: 'din-regular',
            light: 'din-light',
            medium: 'din-medium'
        }

        expect(global).have.property('font').include(fonts);
    });

    test('should be include fontFace', () => {
        expect(global).have.property('fontFace').include(fontFace);
    });
});