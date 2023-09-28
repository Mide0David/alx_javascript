const passwd = document.getElementById("password");
const errorMsg = document.getElementById("error");
const submitButton = document.getElementById("passwordForm");

function validatePassword() {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if (!re.test(passwd.value)) {
        errorMsg.innerHTML = 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)';
        return false;
    }
}

submitButton.addEventListener('submit', function(event) {

    if(!validatePassword()){
        event.preventDefault();
    }
});
