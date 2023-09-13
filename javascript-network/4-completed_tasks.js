const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('API returned an error with status code:', response.statusCode);
    } else {
        try {
            const todos = JSON.parse(body);

            const completedTasksByUser = {};

            todos.forEach((todo) => {
                if (todo.completed) {
                    if (completedTasksByUser[todo.userId]) {
                        completedTasksByUser[todo.userId]++;
                    } else {
                        completedTasksByUser[todo.userId] = 1;
                    }
                }
            });

            console.log(completedTasksByUser);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }
});
