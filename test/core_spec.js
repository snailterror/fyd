import {expect} from 'chai';
import jsdom from 'mocha-jsdom';
import Fyd from '../lib/fyd';

function fyd(f){
    return new Fyd(f);
}

describe('Class selector', () => {

    jsdom({
        html : '<p class="doge">Just wow</p><p class="shibe">Holly ...</p><p class="shibe">Am p ! ...</p>'
    });

    it('Has class doge', () => {
        let div = fyd('p');
        expect(div.hasClass('doge')).to.equal(true);
    });

    it('Set class much-wow', () => {
        let div = fyd('p');
        div.addClass('much-wow');
        expect(div.hasClass('much-wow')).to.equal(true);
    });

    it('Remove class doge', () => {
        let div = fyd('p');
        div.removeClass('doge');
        expect(div.hasClass('doge')).to.equal(false);
    });

    it('Return only div with class shibe', () => {
        let div = fyd('p');
        div.withClass('shibe');
        expect(div.target.length).to.equal(2);
    });

});

describe('Work with text', () => {

    jsdom({
        html : '<p class="doge">Just wow</p>'
    });

    it('Edit inner text', () => {
        let div = fyd('p');
        div.text('Hello Doge');
        expect(div.text()).to.equal('Hello Doge');
    });

});