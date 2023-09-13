const request = require('request');

const api_url = process.argv[2];
const id = 18;

request.get(api_url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error("API returned an error with status code:", response.statusCode);
    } else {
        try {
            const data = JSON.parse(body);
            const count = data.results.filter((film) =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)
            );
            console.log(count.length);
        } catch (error){
            console.error('Error parsing JSON:', error);
        }
    }
});
