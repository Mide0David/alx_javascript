# JavaScript Advanced Master

![Author](https://img.shields.io/badge/Author-Johann%20Kerbrat-blue)
![Weight](https://img.shields.io/badge/Weight-1-green)
![Manual QA](https://img.shields.io/badge/Manual%20QA-Required-red)

## Resources

### Read or Watch
- [Lexical scoping](#)
- [Closure](#)
- [Call stack](#)
- [Binding](#)
- [Callbacks](#)

## Learning Objectives
- Understand lexical scoping in JavaScript.
- Grasp the concept of closure in JavaScript.
- Learn how to use closures effectively.
- Explore chaining different closures.
- Discover how to simulate private methods with closures.
- Understand the execution stack order in JavaScript.
- Learn how to use binding.
- Master the usage of callbacks.

## Requirements

### Recommended Editors
- Visual Studio Code

### General Guidelines
- Ensure all your JavaScript files have the `.js` extension.
- End all your JavaScript files with a newline.
- You must have a `README.md` file at the root of the project folder.

## Quiz Questions
- Great! You've completed the quiz successfully! Keep going! (Show quiz)

---

## Task 0: Lexical Scoping and Welcome Message

**Description:** Create a function named `welcome`:

- It takes two arguments: `firstName` (string) and `lastName` (string).
- It contains a variable named `fullName`, which will contain `firstName` followed by a space and then `lastName`.
- Within the `welcome` function, write a function named `displayFullName`:
  - It should display an alert with the message "Welcome" followed by a space, then the variable `fullName`, followed by an exclamation mark.
- Call the function `displayFullName` at the end of the function `welcome`.

**How to Test:**

1. Open your web inspector in the tab “Console”.
2. Copy-paste your code in the console and hit enter.
3. Copy and paste this: `welcome('Holberton', 'School');` and hit enter to run that code. It should prompt an alert with this content: "Welcome Holberton School!".
4. When you write and execute `alert(fullName)` afterwards, it should return a reference error `fullName` is not defined.

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 0-welcome.js

---

## Task 1: Closure Scope Chain

**Description:** Create a variable named `globalVariable` with the value "Welcome".

Create a function named `outer` that:

- Alerts the content of the variable `globalVariable`.
- Creates a variable named `course` with the value "Holberton".
- Creates a function `inner` that:
  - Alerts the content of the variable `globalVariable` and `course` (concatenated).
  - Creates a variable named `exclamation` with the value "!".
  - Creates a function `inception` that alerts the content of the variable `globalVariable`, `course`, and `exclamation` (concatenated).
  - Calls the function `inception`.
  - Calls the function `inner`.

Call the function `outer`.

**Compose the code:**

- Write the function `inception` within `inner`.
- Write the function `inner` within `outer`.
- Call the function `outer` in the main code (outside any function).
- Call the function `inner` within `outer`.
- Call the function `inception` within `inner`.

**Requirements:**

- Running the script should display three popups one by one with the text "Welcome", "Welcome Holberton", and "Welcome Holberton!".

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 1-nested_functions.js

---

## Task 2: Closure

**Description:** Write a function named `welcomeMessage`:

- It accepts one argument `fullName` (string).
- It should be a closure for an alert displaying "Welcome <fullName>".

After this function definition, create three variables:

- `guillaume` contains a call to `welcomeMessage` with "Guillaume" as an argument.
- `alex` contains a call to `welcomeMessage` with "Alex" as an argument.
- `fred` contains a call to `welcomeMessage` with "Fred" as an argument.

**How to Test:**

In your web console, copy/paste your file. Then, executing the following in the console:

```javascript
guillaume();
alex();
fred();
```

Should display three alerts like below:

```
Welcome Guillaume
Welcome Alex
Welcome Fred
```

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 2-function_me.js

---

## Task 3: Closure and Loops

**Description:** Write a function named `createClassRoom`:

- It takes an argument `numberOfStudents` (number).
- Inside, it contains a function `studentSeat`, which takes an argument `seat` (number) and returns a function that returns the `seat` number.
- After the definition of `studentSeat`, create and populate a variable `students` (array).
- Using a loop from 0 to `numberOfStudents`, pass the number of iteration + 1 to `studentSeat` and add its return value to the `students` array.
- Returns the `students` array.

Create a closure `classRoom`, calling `createClassRoom` with 10 students.

**Requirements:**

Executing the following code:

```javascript
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
```

Should return:

```
1
4
10
```

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 3-classrooms.js

---

## Task 4: Complex Closure

**Description:** Create a function `divideBy`:

- It takes an argument `firstNumber` (number).
- It returns a function that takes an argument `secondNumber` (number).
- It returns the second number divided by the first number.

Create a function `addBy`:

- It takes an argument `firstNumber` (number).
- It returns a function that takes an argument `secondNumber` (number).
- It returns the sum of the two numbers.

Create four closures:

- `addBy100`, that uses the function `addBy` with the number 100.
- `addBy1000`, that uses the function `addBy` with the number 1000.
- `divideBy10`, that uses the function `divideBy` with the number 10.
- `divideBy100`, that uses the function `divideBy` with the number 100.

**Requirements:**

Executing the following code:

```javascript
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
```

Should display in the console:

```
120
2
2
1020
```

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 

4-math.js

---

## Task 5: Changing DOM with Closure

**Description:** Create a function named `changeMode`:

- It accepts 5 arguments: `size` (number), `weight` (string), `transform` (string), `background` (string), `color` (string).
- Using closure, it changes the style of the entire page and sets the font-size, font-weight, text-transform, background-color, and color.

Write a function named `main`:

- Set a variable named `spooky` that passes the arguments 9, "bold", "uppercase", "pink", "green" to `changeMode`.
- Set a variable named `darkMode` that passes the arguments 12, "bold", "capitalize", "black", "white" to `changeMode`.
- Set a variable named `screamMode` that passes the arguments 12, "normal", "lowercase", "white", "black" to `changeMode`.
- Add a paragraph to the body of the page with the text "Welcome Holberton!".
- Add a button to the body with the text "Spooky".
- Add a button to the body with the text "Dark mode".
- Add a button to the body with the text "Scream mode".
- When clicking on each button, the page CSS should change to the different themes you created previously.
- Call the `main` function.

**Requirements:**

- Use vanilla JavaScript to add the elements to the DOM and change the style of the page.
- jQuery is not allowed.
- Clicking the "Spooky" button should change the web page to look like the spooky theme.
- Clicking the "Dark mode" button should change the web page to look like the dark mode theme.
- Clicking the "Scream mode" button should change the web page to look like the scream mode theme.

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 5-mode.js

---

## Task 6: Private Methods with Closure

**Description:** Write a module named `studentHogwarts`:

- It contains two variables `privateScore` set to 0 and `name` set to null.
- It contains one private method `changeScoreBy`, which takes points as an argument and adds it to `privateScore`.
- The module gives access to four public methods (return an object):
  - `setName`, which takes into argument `newName` and sets the private variable `name`.
  - `rewardStudent`, which calls the method `changeScoreBy` with 1.
  - `penalizeStudent`, which calls the method `changeScoreBy` with -1.
  - `getScore`, which returns `name: score` (e.g., "Harry: 14").

Create one variable named `harry`, which is an instance of `studentHogwarts`:

- Set the name of the object to "Harry".
- Reward the student four times.
- Log to the console the name and score.

Create one variable named `draco`, which is an instance of `studentHogwarts`:

- Sets the name of the object to "Draco".
- Reward the student one time.
- Penalize the student three times.
- Log to the console the name and score.

**Requirements:**

- Executing the code should display in the console:
  ```
  Harry: 4
  Draco: -2
  ```

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 6-hogwarts.js

---

## Task 7: Stack Order and setTimeout

Write the following commands in the following order:

1. Log to the console "Start of the execution queue".
2. Log to the console "Final code block to be executed using setTimeout" (with a delay of 0).
3. Using a loop that iterates 100 times, each iteration logs to the console the iteration number.
4. Log to the console "End of the loop printing".
5. Log to the console "Final code block to be executed".

**Requirements:**

Your code should log to the console the following:

```
Start of the execution queue
1
2
...
100
End of the loop printing
Final code block to be executed
```

**Repo:**
- GitHub Repository: alx_javascript
- Directory: Javascript_advanced
- File: 7-timeout.js
