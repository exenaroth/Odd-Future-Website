var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['passwordConfirm'];


/*
function Validate() {
	var a = 0;
	if (username.value == ""){
		a == 1
	} else if(username.value.length < 5){
	}

	if(password.value == ""){
	}	

	if (password.value != password_confirm.value){
		
	} else {
		alert(a.value);
	}

}




*/



function Validate() {
	if (username.value == ""){
		alert("please enter a valid username")
	} 
	else if(username.value.length < 5){
		alert("the username is too short")
	}
	if(password.value == ""){
		alert("please enter a password") 
	}
	else if (password.value != password_confirm.value){
		alert("the passwords must match!") 
	} 
	else {
		alert("you have successfully signed up to Odd Future Magazine");
	}
	
}
	
