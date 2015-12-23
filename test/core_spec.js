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

    it('Edit inner html', () => {
        let div = fyd('p');
        div.html('<span>yo</span>');
        expect(div.html()).to.equal('<span>yo</span>');
    });

    it('Set attribute', () => {
        let div = fyd('p');
        div.attr('yo', 'the value');
        expect(div.hasAttr('yo')).to.equal(true);
    });

    it('Get attribute', () => {
        let div = fyd('p');
        div.attr('yo', 'the value');
        expect(div.attr('yo')).to.equal('the value');
    });

    it('Remove attribute', () => {
        let div = fyd('p');
        div.attr('yo', 'the value');
        div.removeAttr('yo');
        expect(div.hasAttr('yo')).to.equal(false);
    });

});

describe('Misc', () => {

    jsdom({
        html : '<p class="doge">Just wow</p><div class="bonjour">Div 1</div><div class="bonjour">Div 2</div><div class="bonjour">Div 3</div>'
    });

    it('Remove element', () => {
        let div = fyd('p').remove();
        expect(div).to.equal(undefined);
    });

    it('Get first element text', () => {
        let div = fyd('.bonjour');
        let firstElement = div.first().text();
        expect(firstElement).to.equal('Div 1');
    });

    it('Get last element text', () => {
        let div = fyd('.bonjour');
        let firstElement = div.last().text();
        expect(firstElement).to.equal('Div 3');
    });

});