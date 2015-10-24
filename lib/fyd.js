class Fyd {

    constructor(query){
        var elements = document.querySelectorAll(query);
        this.target = Object.keys(elements).map(k => elements[k]);
    }

    // class game
    addClass(className){
        this.target.map(el => el.classList.add(className));
        return this;
    }

    removeClass(className){
        this.target.map(el => el.classList.remove(className));
        return this;
    }

    hasClass(className){
        return this.target.map(el => !!el.classList.contains(className))[0]
    }

    withClass(className){
        this.target = this.target.filter(el => el.classList.contains(className));
        return this;
    }

    // attr game
    attr(attr, val){

        var attributes;

        if(typeof attr === 'undefined')
            throw "Name of attr must be specified";

        if(typeof val === 'undefined'){
            attributes = this.target.map(el => el.getAttribute(attr));
            return attributes.length > 1 ? attributes : attributes[0];
        }else{
            this.target.map(el => el.setAttribute(attr, val));
            return this;
        }

    }

    removeAttr(attr){
        this.target.map(el => el.removeAttribute(attr));
        return this;
    }

    hasAttr(attr){
        return this.target.map(el => !!el.hasAttribute(attr))[0]
    }

    remove(){
        this.target.map((el) => el.remove());
    }

    status(){
        console.log(this);
    }
}

/*Object.assign(Fyd.prototype, {
    nope(){
        console.log('nope');
    }
});*/

var fyd = (f) => new Fyd(f);


var doge = fyd('#doge');
var shibe = fyd('.shibe');

doge.addClass('moon');

shibe.addClass('wow');
shibe.removeClass('shibe');
shibe.addClass('works');
console.log(shibe.hasClass('test'));
shibe.withClass('test');

shibe.status();

shibe.attr('yo');

fyd('#doge').attr('yo', 'not be upset');

console.log(doge.hasAttr('yo'));
console.log(doge.removeAttr('yo'));