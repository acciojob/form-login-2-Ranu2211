let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phone = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    firstName.name = "First Name";
    lastName.name = "Last Name";
    phone.name = "Phone Number";
    email.name = "Email ID";
     const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
const alertMessage = `First Name: ${firstNameValue} Last Name: ${lastNameValue} Phone Number: ${phoneValue} Email ID: ${emailValue}`;
    
    alert(alertMessage);
});