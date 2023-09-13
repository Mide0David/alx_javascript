// Import necessary modules
const request = require('request');

// Function to count movies where Wedge Antilles is present
function countMoviesWithWedgeAntilles(apiUrl) {
  // Make a GET request to the Star Wars API films endpoint
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('API returned a non-200 status code:', response.statusCode);
    } else {
      try {
        // Parse the JSON response
        const data = JSON.parse(body);

        // Filter films where Wedge Antilles (character ID 18) is present
        const filmsWithWedgeAntilles = data.results.filter(film =>
          film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
        );

        // Print the number of films where Wedge Antilles is present
        console.log(filmsWithWedgeAntilles.length);
      } catch (parseError) {
        console.error('Error parsing JSON response:', parseError);
      }
    }
  });
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Check if the API URL is provided
if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
} else {
  // Call the function to count movies with Wedge Antilles
  countMoviesWithWedgeAntilles(apiUrl);
}
