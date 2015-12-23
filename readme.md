# Fyd
### Follow your dreams

![enter image description here](https://img.shields.io/travis/snailterror/fyd.svg) ![enter image description here](https://img.shields.io/npm/v/fyd.svg) ![enter image description here](https://img.shields.io/npm/l/fyd.svg)

> This is beta version

### Work in progress

>  - Immutability
>  - Full IE8 compatibility

##Simple DOM selector

    var element = fyd('#myDiv')
    element.addClass('wow')
    element.hasClass('wow') // true
    element.withClass('wow') // ['div.wow', 'p.wow']
    element.removeClass('wow') // remove .wow for all div selected

##Attribute selector

    element.attr('yo') // return value of 'yep'
    element.attr('yo', 'nope') // set attr yo at nope
    element.hasAttr('yo') // true, false
    element.removeAttr('yo') // bye bye 
    
##Content

    element.text() // Return inner text
    element.html() // Return inner html
    element.text('My text') // Set inner text to "my text"
    element.html('<div>nope</div>') // Set inner html to <div>nope</div>

##Misc

    element.remove() // remove element from dom
    element.first() // Return first element
    element.last() // Return last element
    element.status() // Log current elements

## More

    // You can chain element 
    element.first()
           .addClass('firstElement')
           .attr('data-attribute', 1)
           .text('Element inner text');
    

