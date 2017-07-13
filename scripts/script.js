$(document).ready(function() {

console.log('Have fun!');

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
);


});
