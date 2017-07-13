$(document).ready(function() {





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

var selected;


//click on seat shows form, stores ID of seat to inform potential buyers of row and seat number
$('.seat > a').on('click', function(){
	selected = $(this).attr("id");
	$('form').show("slow");
	$('#msg').text('you have selected seat ' + selected);
	//adds a class of checkout so that user is reaffirmed of their choice
	$(this).parent().addClass("checkout");
})
//global variables to help make functions and shit work
var circusSeats = [];
var patron;

//once the submit button is clicked, execute the following
$('form .btn').on('click', function() {
  var firstName = $('#firstNameInput').val();
  var lastName = $('#lastNameInput').val();


      circusSeats.push({
        'firstName': firstName,
        'lastName': lastName,
        'seats': selected,
      });

	$('form').hide("slow")
	$('input').val("")
	console.log(selected)
	//for each seat that was put into checkout, make them unavailable to other buyers
	$('.seat').each(function(){
    if($(this).hasClass('checkout')) { //change classes after values are submitted
        $(this).addClass('disabled').removeClass('checkout').data("firstname", firstName); 
        patron = $(this).data(); console.log(patron)
    		} //append new div to hover over reserved seats with patron name in it
		}).append('<div class = "hoverdiv">' + patron.firstname + ' </div>');
		

		/*var seatList = document.getElementById("circusSeats");
		for (var i=0; i <circusSeats.length; i++) {
		var reservedSeat = document.createElement("li");
		reservedSeat.innerText = "First Name: " + circusSeats[i].firstName + " and Last name " + circusSeats[i].lastName + " and the seat number is " + circusSeats[i].seats;
		seatList.appendChild(reservedSeat);
		}*/
	});

$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
)

});
