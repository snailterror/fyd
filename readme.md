# Fyd
### Follow your dreams

Simple DOM selector :

    var element = fyd('#myDiv')
    element.addClass('wow')
    element.removeClass('upset')
    element.addClass('shibe')
    element.hasClass('test') // true, false
    element.withClass('test') // element become array of class test

Attribute selector : 

    element.attr('yo') // return value of 'yep'
    element.attr('yo', 'nope') // set attr yo at nope
    element.hasAttr('yo') // true, false
    element.removeAttr('yo') // bye bye 
    
Finally :

    element.remove() // element go sleep 

