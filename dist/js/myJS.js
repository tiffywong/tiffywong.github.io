// Validating Empty Field
function check_empty() {

	if ( isEmailOk() && isNameOk() == true ) {
		alert("Form Submitted Successfully! Thank you!!");
	} else if ( isEmailOk()== false && isNameOk() == false ) {
		document.getElementById("email").style.border = "2px solid #ff0000";
		document.getElementById("name").style.border = "2px solid #ff0000";
		
	} else if (isEmailOk() == false ) {
		document.getElementById("email").style.border = "2px solid #ff0000";
		alert("Invalid Email");
		
	} else {
		document.getElementById("name").style.border = "2px solid #ff0000";
		return false;
	}
}


function isEmailOk() {
    var email = document.getElementById( 'email' ).value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

 function isNameOk() {
 	if (document.getElementById('name').value !== "") {
 		return true;
 	} else {
 		return false;
 	}
}

//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function number () {
var randomNumber = Math.floor(Math.random() * 5 ) + 1;

var guess = prompt('I am thinking of a random number between 1 and 5. What is it?');

if (parseInt(guess) === randomNumber ) {

  alert('You guessed the number!');

}  else {


  alert('Sorry. The number was ' + randomNumber + '');

}
}
