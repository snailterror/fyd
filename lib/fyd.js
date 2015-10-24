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
        return !!this.target[0].hasAttribute(attr);
    }

    remove(){
        this.target.map((el) => el.remove());
    }

    status(){
        console.log(this);
    }
}


module.exports = (f) => new Fyd(f);