import { expect } from 'chai';
import firebase from 'tools/firebase';

describe('Firebase Config', () => {
    test('should be a object', () => {
        expect(firebase).to.be.a('object');
    });

    describe('test apiKey', () => {
        test('should be have property', () => {
            expect(firebase).have.property('apiKey');
        });

        test('should be string', () => {
            expect(firebase.apiKey).to.be.a('string');
        });

        test('should has value', () => {
            expect(firebase.apiKey).to.not.be.empty;
        });
    });

    describe('test authDomain', () => {
        test('should be have property', () => {
            expect(firebase).have.property('authDomain')
        });

        test('should be string', () => {
            expect(firebase.authDomain).to.be.a('string');
        });

        test('should has value', () => {
            expect(firebase.authDomain).to.not.be.empty;
        });
    });

    describe('test databaseURL', () => {
        test('should be have property', () => {
            expect(firebase).have.property('databaseURL');
        });

        test('should be string', () => {
            expect(firebase.databaseURL).to.be.a('string');
        });

        test('should has value', () => {
            expect(firebase.databaseURL).to.not.be.empty;
        });
    });

    describe('test projectId', () => {
        test('should be string', () => {
            expect(firebase.projectId).to.be.a('string');
        });

        test('should has value', () => {
            expect(firebase.projectId).to.not.be.empty;
        });

        test('should be have property', () => {
            expect(firebase).have.property('projectId');
        });
    });
});
