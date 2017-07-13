$(document).ready(function() {


$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
).popover({
			placement: 'bottom',
            trigger: 'hover',
            content: "this seat is available"
	});
/*.on('click', function(){

$('form').show("slow");



});*/

/*var circusSeats = [];

  $('form .btn').on('click', function() {
var firstName = $('#firstNameInput').val();
var lastName = $('#lastNameInput').val();
var seats = $('#msg').val();

    circusSeats.push({
      'firstName': firstName,
      'lastName': lastName,
      'seats': seats,
    });

  }).on('click', function(){
console.log(circusSeats);
$('form').hide("slow");

*/


//this function finds child ID of hovered element and returns into a variable
/*$('.bench').on('click', '.hovering', function(){
  var selected = $(".hovering").children("a").attr("id");
  $('form').show("slow");
  $('#msg').text('you have selected seat ' + selected);
  $('form .btn').on('click', function() {
<<<<<<< HEAD
	var firstName = $('#firstNameInput').val();
	var lastName = $('#lastNameInput').val();
	console.log(firstName + " " + lastName);
	//alert(selected);
	});

});*/


//less convoluted version of above function
$('a').on('click', function(){
	var selected = $(this).attr("id");
	//console.log(selected);
	$('form').show("slow");
	$('#msg').text('you have selected seat ' + selected);
 	$('form .btn').on('click', function() {
	var firstName = $('#firstNameInput').val();
	var lastName = $('#lastNameInput').val();
	//console.log(firstName + " " + lastName);
	//alert(selected);
		}).on('click', function(){
			$('form').hide("slow")
			
		}); console.log($(this))

	});
	
});
