$(document).ready(function() {

console.log('Have fun!');

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
);

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

  });








});

var selected = $('div > div.seat').children("a").attr("id");

$('.seat').click(function() {
  alert( "id of seat is " + selected);
});