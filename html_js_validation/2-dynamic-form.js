function generateInputFields(selectedValue) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;

        inputContainer.appendChild(inputField);
    }
}

function validateForm(event) {
    const inputContainer = document.getElementById("inputContainer");
    const inputFields = inputContainer.getElementsByTagName("input");

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
            return;
        }
    }
}

const dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", validateForm);

const numFieldsDropdown = document.getElementById("numFields");
numFieldsDropdown.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
});

generateInputFields(1);
