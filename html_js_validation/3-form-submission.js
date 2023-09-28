function handleFormSubmit(event) {
    event.preventDefault(); 

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
  
    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
  
    if (nameValue === "" || emailValue === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");

    }
  }
  
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", handleFormSubmit);
