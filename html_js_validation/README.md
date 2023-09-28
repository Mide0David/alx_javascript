# Project README

## HTML Form + JS Validation

![Project Badge](https://img.shields.io/badge/Project-HTML%20Form%20%2B%20JS%20Validation-blue)

**By: Dr. Ehoneah Obed**
- **Weight: 1**
- **Project Start Date: Sep 22, 2023 10:00 PM**
- **Project End Date: Sep 28, 2023 9:59 PM**

### Overview
This project aims to teach and demonstrate client-side validation using HTML and JavaScript. It consists of three tasks, each focusing on a different aspect of form validation. Below, you'll find information on each task, its requirements, and the associated files.

### Task 0: Form Validation - Password Strength
**File**: `password.html`, `0-password-strength.js`

In this task, you will implement JavaScript validation to check the password strength when the form is submitted. The `validatePassword` function should enforce the following criteria:
- The password must be at least 8 characters long.
- The password must contain at least one uppercase letter.
- The password must contain at least one lowercase letter.
- The password must contain at least one numeric digit.
- The password must contain at least one special character (e.g., !@#$%^&*).

If the password meets all the criteria, the form submission is allowed. Otherwise, an appropriate error message will be displayed.

### Task 1: Form Validation - Email Validation
**File**: `email.html`, `1-email-validation.js`

In this task, you will implement JavaScript validation to check the email format when the form is submitted. The `validateEmail` function should ensure that the email follows the standard email format, with a username followed by the @ symbol and the domain name. If the email format is incorrect, the error message "Please enter a valid email address." will be displayed, and form submission will be prevented.

### Task 2: Dynamic Form Field
**File**: `dynamic-form.html`, `2-dynamic-form.js`

In this task, you will generate a dynamic number of text input fields based on the selected value in a dropdown menu. The `generateInputFields` function will create the desired number of text input fields with unique name attributes. You'll also implement validation to ensure all dynamically generated fields are filled before form submission. If any field is empty, the error message "Please fill in all fields" will be displayed, and form submission will be prevented.

### Task 3: Form Submission Handling
**File**: `form-submission.html`

In this task, you will handle form submission and perform validation before submitting. The `handleFormSubmit` function will prevent the default form submission behavior, retrieve values from form fields, and validate them. If required fields (e.g., "name" and "email") are empty, the error message "Please fill in all required fields" will be displayed. If all validations pass, a success message "Form submitted successfully!" will be shown.

### General Requirements
- Recommended editor: Visual Studio Code
- All files should end with a new line.
- Your code should be W3C compliant and validate with W3C-Validator.
- Do not use external libraries; this project should be built with only HTML/CSS/JavaScript.

Please refer to the specific task files and associated JavaScript files for detailed instructions and coding requirements. Feel free to reach out for any clarification or assistance during the project.

### Resources
- JavaScript Form Validation
- JavaScript Forms
- How to make form validation using JavaScript (video)

### Learning Objectives
By the end of this project, you should be able to explain to anyone, without the help of Google:
- What client-side validation is.
- How to implement basic form validation using JavaScript.
- How to handle form submissions and perform data validation using JavaScript.
