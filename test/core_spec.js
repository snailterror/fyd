import {expect} from 'chai';
import jsdom from 'mocha-jsdom';

describe('application logic', () => {

    describe('Test for tests :D', () => {

        jsdom();

        it('Egal 2', () => {
            const test = 2;
            expect(test).to.equal(2);
        });

        it('return div', () => {
            var div = document.createElement('div');
            expect(div.nodeName).to.equal('DIV');
        });

    });


});