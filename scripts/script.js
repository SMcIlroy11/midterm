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

var selected;


//click on seat shows form, stores ID of seat to inform potential buyers of row and seat number
$('.seat > a').on('click', function(){
	selected = $(this).attr("id");
	$('form').show("slow");
	$('#msg').text('you have selected seat ' + selected);
	//adds a class of checkout so that user is reaffirmed of their choice
	$(this).parent().addClass("checkout");
})

//once the submit button is clicked, execute the following
$('form .btn').on('click', function() {

	

		
	$('form').hide("slow")
	$('input').val("")
	console.log(selected)
	//for each seat that was put into checkout, make them unavailable to other buyers
	$('.seat').each(function(){
    if($(this).hasClass('checkout')) {
        $(this).addClass('disabled').removeClass('checkout');
    		} 
		});
	
	
	});

});










