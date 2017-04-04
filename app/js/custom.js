$(document)
    .on('mouseover', '.dropdown', function () {
        var dropdown = $(this).find('.dropdown-menu');
        dropdown.addClass('drop-hover');
        setTimeout(function () {
            dropdown.show();
        }, 150);

    })
    .on('mouseout', '.dropdown', function () {
            var dropdown = $(this).find('.dropdown-menu');
            dropdown.removeClass('drop-hover');
            setTimeout(function () {
                    dropdown.hide();
            }, 150);
    })