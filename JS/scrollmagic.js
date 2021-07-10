$(document).ready(function () {

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Pin the strip1
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#strip2',
            triggerHook: 1,
            // duration: '30%'
        })
        .setPin('#strip1')
        // .addIndicators()
        .addTo(controller)

    //Pin the strip2
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#strip3',
            triggerHook: 1,
            // duration: '30%'
        })
        .setPin('#strip2')
        // .addIndicators()
        .addTo(controller)

    //Pin the strip3
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#strip4',
            triggerHook: 1,
            // duration: '30%'
        })
        .setPin('#strip3')
        // .addIndicators()
        .addTo(controller)

    //Pin the strip4
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#myfoot',
            triggerHook: 1,
            // duration: '30%'
        })
        .setPin('#strip4')
        // .addIndicators()
        .addTo(controller)
});