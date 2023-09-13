const request = require('request');

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('API returned an error with status code:', response.statusCode);
    } else {
        try {
            const movieData = JSON.parse(body);

            movieData.characters.forEach((characterUrl) => {
                request(characterUrl, (charError, charResponse, charBody) => {
                    if (charError) {
                        console.error('Error fetching character:', charError);
                    } else if (charResponse.statusCode !== 200) {
                        console.error('API returned an error with status code:', charResponse.statusCode);
                    } else {
                        const characterData = JSON.parse(charBody);
                        console.log(characterData.name);
                    }
                });
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }
});
