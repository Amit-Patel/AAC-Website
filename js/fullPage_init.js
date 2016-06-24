$(document).ready(function () {
    $('.scroll_wrapper').fullpage(
        {
            sectionSelector: '.page',
            scrollBar: true,
            anchors: ['home', 'about', 'events', 'photography', 'blog', 'contact'],
            menu: '#menu',
            css3: true
        }
    );
});