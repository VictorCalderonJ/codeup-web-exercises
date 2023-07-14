$(document).ready(function() {
    $('#toggleLink').click(function(e) {
        e.preventDefault();
        $('dd').toggleClass('invisible');
    });
    $('#toggleLink1').click(function (e) {
        e.preventDefault();
        $('ul li:last-child').toggleClass('tes')
    });
    $('.henlo').click(function() {
        console.log(`test`)
        $(this).css('background-color','blue');
    });
});

