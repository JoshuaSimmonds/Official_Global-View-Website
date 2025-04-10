// script.js
document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateEmail(); // Call your validation function here

    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';




    let isValid = true;


   
    // Declaration
    const emailInput = document.getElementById('email'); // Reference to email input
    const email = emailInput.value.trim();




   // Validate Email
   if (email === '') {
    document.getElementById('emailError').innerText = 'Field is required';
    document.getElementById('emailError').style.display = 'block';

    // Change the email input border color to red on error
    document.getElementById('email').style.borderColor = 'red';
    isValid = false;

} else if (!email.includes('@')) { // Check for '@' symbol
    document.getElementById('emailError').innerText = 'Invalid email format: missing "@" symbol';
    document.getElementById('emailError').style.display = 'block';

    // Set the input border to red if the email format is incorrect
    document.getElementById('email').style.borderColor = 'red';

}else if (!email.endsWith('.com')) { // Check for '.com' domain
    document.getElementById('emailError').innerText = 'Invalid email format: must end with ".com';
    document.getElementById('emailError').style.display = 'block'; // Show error 
    document.getElementById('email').style.borderColor = 'red'; // Change border color to red
    isValid = false; 
}
else {
    // If email is not empty, clear any previous error message
    document.getElementById('emailError').style.display = 'none';

    // Optionally, you could add more validation here (e.g., regex for email format)
    
    // Change the email input border color to green when valid
    document.getElementById('email').style.borderColor = 'green';
}
    // Validate password
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value.trim();


if (passwordValue === '') {
    document.getElementById('passwordError').innerText = 'Field is required';
    document.getElementById('passwordError').style.display = 'block';

    // Change the password input border color to red on error
    document.getElementById('password').style.borderColor = 'red';
    isValid = false;

} else if (passwordValue.length < 6) {
    document.getElementById('passwordError').innerText = 'At least 6 characters required';
    document.getElementById('passwordError').style.display = 'block';


    // Set the input border to red if the password length is insufficient
    document.getElementById('password').style.borderColor = 'red';
    isValid = false;
} 

else {
    // If email is not empty, clear any previous error message
    document.getElementById('passwordError').style.display = 'none';

    // Optionally, you could add more validation here (e.g., regex for email format)
    
    // Change the email input border color to green when valid
    document.getElementById('password').style.borderColor = 'green';
}




        // Function to validate email format using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.(com)$/;
    return re.test(String(email).toLowerCase());
}




});

