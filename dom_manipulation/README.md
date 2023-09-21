# JavaScript HTML DOM Manipulation

![Project Badge](https://img.shields.io/badge/JavaScript-HTML%20DOM%20Manipulation-brightgreen)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Master-blue)
![By](https://img.shields.io/badge/By-Dr.%20Ehoneah%20Obed-brightgreen)
![Weight](https://img.shields.io/badge/Weight-1-lightgrey)
![Start Date](https://img.shields.io/badge/Start%20Date-Sep%2015%2C%202023%2010%3A00%20PM-green)
![End Date](https://img.shields.io/badge/End%20Date-Sep%2021%2C%202023%209%3A59%20PM-red)

Welcome to the JavaScript HTML DOM Manipulation project, created by Dr. Ehoneah Obed. In this project, you will explore and practice fundamental concepts related to Document Object Model (DOM) manipulation using JavaScript.

## General Objectives

- **Understand the Document Object Model (DOM):** The DOM is a critical concept in web development, serving as the bridge between web pages and JavaScript. It allows you to interact with and manipulate the content and structure of a webpage in real-time.

- **Access and Manipulate Elements with JavaScript:** As a web developer, you'll need to learn how to access and manipulate HTML elements using JavaScript. This includes tasks such as changing text, updating images, and altering element styles.

- **Using CSS Selectors and Traversing the DOM Tree:** Mastering CSS selectors is essential for pinpointing specific HTML elements within a page. Additionally, understanding how to traverse the DOM tree enables you to navigate between elements, their parents, and their children with ease.

- **Working with Event Listeners/Handlers:** Interactive web applications require event handling. You'll learn how to capture user interactions, such as clicks and keystrokes, and respond to them using event listeners and handlers, making your web experiences engaging and responsive.

## Brief Introduction

### What is the Document Object Model (DOM)?

The Document Object Model, often referred to as the DOM, is a crucial concept in web development. It forms the bridge between web pages and the JavaScript language, enabling you to interact with and manipulate the content and structure of a webpage in real-time. Understanding the DOM is like gaining the keys to the inner workings of a website.

### Access and Manipulate Elements with JavaScript

One of the core skills that you need to develop as a web developer is the ability to access and manipulate HTML elements using JavaScript. Whether it's changing the text within a paragraph, updating an image, or altering the style of an element, you'll need to gain the power to make dynamic changes to web pages.

### Using CSS Selectors and Traversing the DOM Tree

You should also master the art of using CSS selectors to pinpoint specific HTML elements within a page. Understanding how to traverse the DOM tree will enable you to navigate between elements, their parents, and their children with ease. With knowledge of this, you will be able to target the right element for modification or interaction.

### Working with Event Listeners/Handlers

No interactive web application is complete without event handling. You'll need to learn how to capture user interactions, such as clicks and keystrokes, and respond to them using event listeners and handlers. This skill will open doors to building engaging and responsive web experiences.

## Resources

- [Manipulating documents](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [Intro Session for this project](#) (Link to an introductory session, if available)
- [Live Learning Session for this Project](#) (Link to live learning sessions, if available)

## Requirements

### General

- **Recommended editors:** Visual Studio Code or any preferred code editor.
- All your files should end with a new line.
- A `README.md` file, at the root of the project folder, is mandatory.
- You are not allowed to use `var`.

## Project Tasks

### Task 0: Play with the DOM

Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.

- Use the HTML code provided in `0-select-id.html` as the starting point and add your JavaScript code as an internal `<script>` tag.

- Write JavaScript code to select the element using its id and store it in a variable.

- Use the DOM API to modify the content of the `<p>` element to "I successfully updated this paragraph with JavaScript."

- Make use of `document.getElementById`.

- Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### Task 1: Selecting HTML Elements Using Selectors

Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

- Use the HTML code provided in `1-select-class.html` as the starting point and add your JavaScript code as an internal `<script>` tag.

- Use the DOM API to modify the format of the `<p class="highlight">` element to make the content bold.

- Make use of `document.querySelectorAll`.

- Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### Task 2: Modifying Element Content, Attributes, and Styles

Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

- Use the HTML code provided in `2-select-image.html` as the starting point and add your JavaScript code as an internal `<script>` tag.

- Write JavaScript code to select the `<img>` element using its id and store it in a variable.

- Use the DOM API to modify the following:
  - The `src` attribute to `https://picsum.photos/200/301`.
  - The `alt` attribute to "New image."
  - The border style to `2px solid red`.

- Make use of `document.getElementById`.

- Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

### Task 3: Creating, Appending, and Removing Elements

Write a JavaScript program that demonstrates the creation, appending, and removal of elements using the DOM.

- Use the HTML code provided in `3-multiple-actions.html` as the starting point and add your JavaScript code as an internal `<script>` tag.

- Write JavaScript code to select the container element using its id and store it in a variable.

- Use the DOM API to create a new `<p>` element and add "New paragraph" as its content.

- Append the newly created elements to the container element.

- Add a button that removes/hides the newly created paragraph when first clicked and shows it when clicked again.

- Verify that the program successfully creates, appends, and toggles elements when the HTML file is opened in a browser.
