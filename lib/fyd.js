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
    addClass(className = ''){
        this.target.forEach(el => el.classList.add(className));
        return this;
    }

    /**
     * Remove class to each element selected
     * @param className
     * @returns {Fyd}
     */
    removeClass(className = ''){
        this.target.forEach(el => el.classList.remove(className));
        return this;
    }

    /**
     * Check if the first element has specified className
     * @param className
     * @returns {*}
     */
    hasClass(className = ''){
        return this.target.map(el => el.classList.contains(className))[0]
    }

    /**
     * Return Array of each element with speciefied className
     * @param className
     * @returns {Fyd}
     */
    withClass(className = ''){
        this.target = this.target.filter(el => el.classList.contains(className));
        return this;
    }

    /**
     * Change text of each element selected
     * @param text
     * @returns {Fyd}
     */
    text(text){

        if (bowser.msie && bowser.version <= 8) {

            if(typeof text === 'undefined'){
                return this.target[0].textContent;
            }else{
                this.target.forEach(el => el.textContent = text);
                return this;
            }

        }

        if(typeof text === 'undefined')
            return this.target[0].textContent;

        this.target.forEach(el => el.textContent = text);
        return this;

    }

    /**
     * Change html of each element selected
     * Return the first element innerHTML if html is undifined
     * @param html
     * @returns {Fyd}
     */
    html(html){

        if(typeof html === 'undefined')
            return this.target[0].innerHTML;

        this.target.forEach(el => el.innerHTML = html);
        return this;
    }

    /**
     * Set attribute of each element selected
     * If no val is defined return the first element attribute value
     * @param attr
     * @param val
     * @returns {*}
     */
    attr(attr, val){

        let attributes;

        if(typeof attr === 'undefined')
            throw "Name of attr must be specified";

        if(typeof val === 'undefined'){
            return this.target[0].getAttribute(attr);
        }else{
            this.target.forEach(el => el.setAttribute(attr, val));
            return this;
        }

    }

    /**
     * Remove attributes of eacg element selected
     * @param attr
     * @returns {Fyd}
     */
    removeAttr(attr){
        this.target.forEach(el => el.removeAttribute(attr));
        return this;
    }

    /**
     * Return true/false if first element has the attribute
     * @param attr
     * @returns {boolean}
     */
    hasAttr(attr){
        return this.target[0].hasAttribute(attr);
    }

    /**
     * Remove Element from the dom
     */
    remove(){
        this.target.forEach((el) => {
            let parent = el.parentNode;
            parent.removeChild(el);
        });
    }

    /**
     * Return first element of elements
     * @returns {Array.<T>}
     */
    first(){
        this.target = this.target.filter( (i, k) => !k ? i : null);
        return this;
    }

    /**
     * Return last element of elements
     * @returns {Array.<T>}
     */
    last(){
        this.target = this.target.filter( (i, k) => k === this.target.length - 1 ? i : null);
        return this;
    }

    /**
     * Get Status of element (log element)
     */
    status(){
        console.log(this);
    }

}