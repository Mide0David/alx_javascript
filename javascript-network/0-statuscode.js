const request = require('request');

function displayStatusCode(url) {
  request.get(url, (error, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('code:', response.statusCode);
    }
  });
}

const url = process.argv[2];

if (!url) {
  console.error('Please provide a URL as an argument.');
} else {
  displayStatusCode(url);
}
