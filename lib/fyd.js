import bowser from 'bowser';

export default class Fyd {

    /**
     * Get query and return list of slelected elements
     * @param query
     */
    constructor(query){
        let elements = document.querySelectorAll(query);
        this.target = Object.keys(elements).map(k => elements[k]);
    }

    /**
     * Add class to each element selected
     * @param className
     * @returns {Fyd}
     */
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

    // Content
    text(text = ''){

        if (bowser.msie && bowser.version <= 8) {
            this.target.forEach(el => el.textContent = text);
        }

        this.target.forEach(el => el.textContent = text);
        return this;

    }

    html(html){
        this.target.forEach(el => el.innerHTML = html);
        return this;
    }

    // attr
    attr(attr, val){

        let attributes;

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