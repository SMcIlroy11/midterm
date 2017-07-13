$(document).ready(function() {


$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
).on('click', function(){

$('form').show("slow");



});

var circusSeats = [];

  $('form .btn').on('click', function() {
var firstName = $('#firstNameInput').val();
var lastName = $('#lastNameInput').val();
var seats = $('#chooseNumSeats').val();

    circusSeats.push({
      'firstName': firstName,
      'lastName': lastName,
      'seats': seats,
    });

  }).on('click', function(){
console.log(circusSeats);
$('form').hide("slow");

  });


});


});
