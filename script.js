//your JS code here. If required.
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phone = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
	const firstNameValue = firstName.value.trim();
            const lastNameValue = lastName.value.trim();
            const phoneValue = phone.value.trim(); // Access phone.value correctly
            const emailValue = email.value.trim();

            alert(`First Name: ${firstNameValue} Last Name: ${lastNameValue} Phone Number: ${phoneValue} Email ID: ${emailValue}`);
            
	
})