# Learning Objectives

Upon completing this project, you will have gained the following knowledge and skills, enabling you to explain and apply them without relying on external resources:

## General

1. Understanding the Significance of JavaScript Programming
   - Recognize the strengths and advantages of JavaScript programming.

2. Manipulating JSON Data
   - Understand how to work with JSON (JavaScript Object Notation) data, including parsing and creating JSON objects.

3. Utilizing the Request and Fetch API
   - Learn how to make HTTP GET requests and handle responses using the Request and Fetch API.

4. Reading and Writing Files with the fs Module
   - Discover how to read and write files using the fs module in Node.js, including encoding and file manipulation.

## Requirements

### General

- Familiarity with Visual Studio Code as the recommended code editor.
- Proficiency in writing JavaScript code that adheres to the semistandard coding style, incorporating Standard rules and semicolons.
- Ability to ensure that all code files end with a new line.
- Mastery of code organization and documentation with a mandatory README.md file at the project's root folder.
- Competence in executing code on Ubuntu 20.04 LTS using Node.js (version 14.x).
- Elimination of the use of "var" declarations in favor of modern JavaScript variable declarations.

---

# Project Overview

## Introduction

This project comprises several tasks designed to enhance your understanding of JavaScript programming, JSON data manipulation, HTTP requests, and file handling using Node.js. By the end of this project, you will have a solid grasp of these fundamental concepts and be able to apply them confidently.

## Tasks

### Task 0: Status Code

**Objective**: Write a script to display the status code of a GET request.

- Input: URL for the GET request.
- Output: The status code in the format: `code: <status code>`.
- Utilizes the 'request' module for HTTP requests.

[Task 0 Code: 0-statuscode.js](https://github.com/alx_javascript/javascript-network/blob/main/0-statuscode.js)

### Task 1: Star Wars Movie Title

**Objective**: Create a script to print the title of a Star Wars movie based on a given movie ID.

- Input: Movie ID.
- Output: The title of the corresponding Star Wars movie.
- Utilizes the Star Wars API with the 'request' module to fetch movie data.

[Task 1 Code: 1-starwars_title.js](https://github.com/alx_javascript/javascript-network/blob/main/1-starwars_title.js)

### Task 2: Star Wars Wedge Antilles

**Objective**: Develop a script to count the number of movies featuring the character "Wedge Antilles."

- Input: API URL for the Star Wars API.
- Output: The count of movies where "Wedge Antilles" appears.
- Uses the 'request' module to retrieve and filter data from the Star Wars API.

[Task 2 Code: 2-starwars_count.js](https://github.com/alx_javascript/javascript-network/blob/main/2-starwars_count.js)

### Task 3: Loripsum

**Objective**: Write a script to fetch the contents of a webpage and store it in a file.

- Input: URL to request and file path to store the response.
- Output: Webpage content stored in a file (UTF-8 encoded).
- Makes use of the 'request' module for web content retrieval.

[Task 3 Code: 3-request_store.js](https://github.com/alx_javascript/javascript-network/blob/main/3-request_store.js)

### Task 4: How Many Completed?

**Objective**: Create a script to compute the number of completed tasks by user ID.

- Input: API URL for task data.
- Output: A JSON object containing user IDs and the number of completed tasks for each user.
- Utilizes the 'request' module to retrieve task data and perform computations.

[Task 4 Code: 4-completed_tasks.js](https://github.com/alx_javascript/javascript-network/blob/main/4-completed_tasks.js)

### Task 5: Who Was Playing in This Movie?

**Objective**: Develop a script to print all characters of a Star Wars movie based on its movie ID.

- Input: Movie ID.
- Output: A list of character names, one per line.
- Utilizes the Star Wars API with the 'request' module to retrieve character data.

[Task 5 Code: 5-starwars_characters.js](https://github.com/alx_javascript/javascript-network/blob/main/5-starwars_characters.js)

