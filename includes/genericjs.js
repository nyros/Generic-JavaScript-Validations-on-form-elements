// JavaScript Document

//validation function for text box empty or not
function isNotEmpty(elem){
	if(elem.value.lenth==0){
		alert("Error Message");
		elem.focus();
		return false;
	}
	else{
		return true;
	}
}

//validation function for alphabet input fields
function isAlphabet(elem,mi,helpermsg){
	var alphaExp = /^[a-zA-Z]+$/; //regular expression for alphabets
	var elem_len = elem.value.length; 
	if(elem.value.match(alphaExp) && elem_len>=mi){
		return true;
	}else{
		alert(helpermsg);
		elem.focus();
		return false;
	}
}

//validation function for numeric input fields
function isNumeric(elem,mi, helperMsg){
	var numericExpression = /^[0-9]+$/; // regular expression for numbers
	if(elem.value.match(numericExpression)&& elem.value.length>=mi){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//validation function for Alpha numeric input fields
function isAlphaNumeric(elem, mi, helperMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/; // regular expression for Alphanumeric characters
	var elem_len = elem.value.length; 
	if(elem.value.match(alphaExp)  && elem_len>=mi){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


//validation function for email format checking

function isEmail(elem,helpermsg){
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if(elem.value.match(emailPattern)){
		return true;
	}
	else{
		alert(helpermsg);
		elem.focus();
		return false;
	}
}
/*validation function for Phone number fields*/
function isPhone(elem,mi, helperMsg){
	var numericExpression = /^(?:\+?91[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function madeSelection(elem, helperMsg){
	if(elem.value == "Select Month" || elem.value==""){
		alert(helperMsg);
		elem.focus();
		return false;
	}else{
		return true;
	}
}



