// Custom jQuery

$('h3').hover(
    function () {
        $(this).prepend($('<span>>></span>'));
    }, function () {
        $(this).find('span:last').remove();
    }
);

// Plugin 1


//Plugin 2
