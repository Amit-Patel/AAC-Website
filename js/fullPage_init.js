$(document).ready(function () {
    $('.scroll_wrapper').fullpage(
        {
            sectionSelector: '.page',
            scrollBar: true,
            anchors: ['home', 'about', 'events', 'photography', 'blog', 'contact'],
            menu: '#menu',
            css3: true,

            onLeave: function (index, nextIndex, direction) {
                if (nextIndex == 1) {
                    $('header').animate({
                        top: "+=58vh",
                    }, 400);
                }
                else if (index == 1) {
                    $('header').animate({
                        top: "-=58vh",
                    }, 400);
                }
            },
        }
    );
});