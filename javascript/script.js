function validateForm(){
	var fname = document.forms["form-grid"]["fname"].value;
	var lname = document.forms["form-grid"]["lname"].value;
	var email = document.forms["form-grid"]["email"].value;
	var phone = document.forms["form-grid"]["phone"].value;
	var pat_age = document.forms["form-grid"]["patient_age"].value;
	var emer_name = document.forms["form-grid"]["emer_name"].value;
	var emer_phone = document.forms["form-grid"]["emer_num"].value;

	if(fname =="" || lname=="" || email == "" || phone == ""){
		alert("Your details must be entered");
		return false;
	}

	if(pat_age < 0){
		alert("Please enter a real age for the patient");
		return false;
	}

	if(pat_age == ""){
		alert("Require a patient's age");
		return false;
	}


	if(emer_name == "" || emer_phone == ""){
		alert("We require an emergency contact's details");
		return false;
	}
}
