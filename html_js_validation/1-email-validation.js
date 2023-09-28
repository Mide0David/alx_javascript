function validateEmail() {
    var emailInput = document.getElementById("email");

    var errorMessage = document.getElementById("error");

    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    var email = emailInput.value;

    errorMessage.textContent = "";

    if (emailRegex.test(email)) {
        return true;
    } else {
        errorMessage.textContent = "Please enter a valid email address.";
        
        return false;
    }
}

var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault();
    }
});
