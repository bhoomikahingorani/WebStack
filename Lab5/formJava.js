document.addEventListener("DOMContentLoaded", function () {
    document.forms["validationForm"].addEventListener("submit", function (event) {
        var isValid = true;

        // Validate Full Name
        var fullName = document.getElementById("full_name").value;
        if (fullName.length !== 10) {
            alert("Full Name should be exactly 10 characters long.");
            isValid = false;
        }

        // Validate Age
        var age = parseInt(document.getElementById("age").value);
        if (isNaN(age) || age <= 18) {
            alert("Age should be a number greater than 18.");
            isValid = false;
        }

        // Validate City
        var city = document.getElementById("city").value;
        if (!/^[a-zA-Z]+$/.test(city)) {
            alert("City should contain only characters.");
            isValid = false;
        }

        // Validate Email
        var email = document.getElementById("email").value;
        if (!isValidEmail(email)) {
            alert("Invalid Email address.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function isValidEmail(email) {
        // Simple email validation regex, for more robust validation consider using a library
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});