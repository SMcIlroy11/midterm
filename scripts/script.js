$(document).ready(function() {


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


/*      circusSeats.push({
        'firstName': firstName,
        'lastName': lastName,
        'seats': selected,
      }); */

	$('form').hide("slow")
	$('input').val("")
	console.log(selected)
	//for each seat that was put into checkout, make them unavailable to other buyers
	$('.seat').each(function(){
    if($(this).hasClass('checkout')) { //change classes after values are submitted
        $(this).addClass('disabled').removeClass('checkout');
        }
	});
	//append new div to hover over reserved seats with patron name in it
   	$('#' + selected).data('firstName', firstName)
    //patron = $(this).data();
    var patronName = $('#' + selected).data('firstName')
    $('#' + selected).parent().append('<div class = "hoverdiv">' + patronName + ' </div>') 
    console.log(patronName)
   
		 
	
	console.log(selected);

	});

$('form').hide();

//hover over seat and give it a new class
$('.seat').hover(
       function(){ $(this).addClass('hovering') },
       function(){ $(this).removeClass('hovering') }
)

});
