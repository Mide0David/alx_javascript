const request = require('request');
const args = process.argv;

if (args.length < 3) {
  console.log('Usage: node script.js <URL>');
  process.exit(1);
}

const url = args[2];

request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Code:', response.statusCode);
});
