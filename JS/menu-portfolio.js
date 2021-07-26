$(document).ready(function () {

    function addGray() {
        $('.navbar-brand').addClass('color-gray');
        $('.nmenu-bg').addClass('bg-gray');
        $('.nmenu path').addClass('stroke-white');
        $('.nnav li a').addClass('color-white');
        $('.desktop-menu li a').addClass('color-gray')

    };

    function removeGray() {
        $('.navbar-brand').removeClass('color-gray');
        $('.nmenu-bg').removeClass('bg-gray');
        $('.nmenu path').removeClass('stroke-white');
        $('.nnav li a').removeClass('color-white');
    };

    $(window).on('scroll', function () {
        logoPosition = $('.navbar-brand').offset().top;
        strip2Position = $('.strip2').offset().top;
        if (logoPosition > strip2Position) {
            addGray();
        } else {
            removeGray();
        }
    });

});
