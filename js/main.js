// Custom jQuery

$('h3').hover( // this is going to be a hover effect
    function () {
        $(this).prepend($('<span>>></span>')); // on hover, it will add two characters at the beginning of the element
    }, function () {
        $(this).find('span:last').remove(); // when the mouse unhovers, the text will return to normal
    }
);

// Plugin 1: Drooltip

var tooltip = new Drooltip({
    'element': '.myTooltip'});


//Plugin 2
