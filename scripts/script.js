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

})
//global variables to help make functions and shit work

var patron;

//once the submit button is clicked, execute the following
$('form .btn').on('click', function() {
  var firstName = $('#firstNameInput').val();
  var lastName = $('#lastNameInput').val();

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
   	//declares the variable patron name to be whatever was input
    var patronName = $('#' + selected).data('firstName');
    //finds the selected anchor and appends a div to its parent containing the selected seat and the name of patron
    $('#' + selected).parent().append('<div class = "hoverdiv"> seat ' + selected + ' reserved by: ' + patronName + ' </div>');
		$('.thank-you').append('<p> Thank you ' + patronName + ' for reserving your seat: ' + selected + ' at Grand Circus!');



	});
//sets default state of form to be hidden
$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
)

});
