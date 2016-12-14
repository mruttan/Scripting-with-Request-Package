const request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log("There's an error!: " + err)
  })
  .on('response', function (response) {
    if (response) {
      console.log("Response received!")
    }
    console.log("Response status code is: " + response.statusCode);
    console.log("Response message is: " + response.statusMessage);
    console.log("Content Type is: " + response.headers['content-type']);
    console.log("Content is downloading...");
    response.on('end', function() {
      console.log("Content is finished downloading");
    });
  })
  .pipe(fs.createWriteStream('./future.jpeg'))