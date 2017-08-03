$(document).ready(function() {


var selected;


//click on seat shows form, stores ID of seat to inform potential buyers of row and seat number
$('.seat > a').on('click', function(){
	selected = $(this).attr("id");
	$('form').show("slow");
	$('#msg').text(selected);
	//adds a class of checkout so that user is reaffirmed of their choice
	$('.seat').removeClass("checkout");
	$('a').removeClass("checkout");
	$(this).parent().addClass("checkout");
	// remove class that is added after form is submitted
	$('.thankYou2').hide("fast");
})
//global variables to help make functions and shit work

var patron;

//once the submit button is clicked, execute the following
$('form .btn').on('click', function() {
  var firstName = $('#firstNameInput').val();
  var lastName = $('#lastNameInput').val();
  var confirmationSound = $('#whipcrack')[0];
  confirmationSound.play();

	$('form').hide("slow");
	//clears the form inputs upon being hidden
	$('input').val("");

	//for each seat that was put into checkout, make them unavailable to other buyers
	$('.seat').each(function(){
    if($(this).hasClass('checkout')) { //change classes after values are submitted
        $(this).addClass('disabled').removeClass('checkout');
        }
	});
	//sets data attribute of the selected anchor as user inputted form info
   	$('#' + selected).data('firstName', firstName);
			$('#' + selected).data('lastName', lastName);
   	//declares the variable patron name to be whatever was input
    var patronName1 = $('#' + selected).data('firstName');
		var patronName2 = $('#' + selected).data('lastName');
    //finds the selected anchor and appends a div to its parent containing the selected seat and the name of patron
    $('#' + selected).parent().append('<div class = "hoverdiv"> Seat ' + selected + ' reserved by: ' + patronName1 + ' ' + patronName2 + ' </div>');
// Add class/pargraph with patron name and seat reserved and append into the div
		$('.thank-you').append('<div class="thankYou2"</div><p> Thank you ' + patronName1 + ' ' + patronName2 + ' for reserving your seat: ' + selected + ' at Grand Circus!');

	});
//sets default state of form to be hidden
$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') })

});
