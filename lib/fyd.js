class Fyd {

    constructor(query){
        var elements = document.querySelectorAll(query);
        this.target = Object.keys(elements).map(k => elements[k]);
    }

    addClass(className){
        return this.target.map(el => el.classList.add(className));
    }

    remove(){
        console.log(this);
    }
}

var fyd = (f) => new Fyd(f);


fyd('#doge').addClass('moon').remove();
fyd('.shibe').addClass('nope');