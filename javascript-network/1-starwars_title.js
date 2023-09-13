const request = require('request');

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API returned an error with status code:', response.statusCode);
  } else {
    const movieData = JSON.parse(body);

    const movieTitle = movieData.title;

    console.log(movieTitle);
  }
});
