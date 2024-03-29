$(document).ready(function () {

    //Menu
    $('.nmenu input').change(function () {
        document.getElementById('nmenu-bg').classList.toggle('change-bg');
        document.getElementById('nnav').classList.toggle('nnav-change');
    });

    $('.nnav a').on('click', function () {
        $('.nmenu input').click();
    });

    function addGray() {
        $('.navbar-brand').addClass('color-gray');
        $('.nmenu-bg').addClass('bg-gray');
        $('.nmenu path').addClass('stroke-white');
        $('.nnav li a').addClass('color-white');
    };

    function removeGray() {
        $('.navbar-brand').removeClass('color-gray');
        $('.nmenu-bg').removeClass('bg-gray');
        $('.nmenu path').removeClass('stroke-white');
        $('.nnav li a').removeClass('color-white');
    };

    // // Handling the menu color in other pages than the home
    // $(window).on('scroll', function () {
    //     logoPosition = $('.navbar-brand').offset().top;
    //     stripAPosition = $('.stripA').offset().top;
    //     if (logoPosition > stripAPosition) {
    //         addGray();
    //     } else {
    //         removeGray();
    //     }
    // });

    $(window).on('scroll', function () {
        logoPosition = $('.navbar-brand').offset().top;
        strip2Position = $('.strip2').offset().top;
        strip3Position = $('.strip3').offset().top;
        strip4Position = $('.strip4').offset().top;
        if (logoPosition > strip4Position) {
            addGray();
        } else if (logoPosition > strip3Position) {
            removeGray();
        } else if (logoPosition > strip2Position) {
            addGray();
        } else {
            removeGray();
        }
    });


});