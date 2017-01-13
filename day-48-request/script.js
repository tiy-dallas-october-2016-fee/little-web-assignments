$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });



    var button = document.querySelector('button');
    button.addEventListener('click', function() {
      $('.jcarousel').jcarousel('scroll', '+=2');
    });
});
