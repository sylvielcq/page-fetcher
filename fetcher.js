
const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1];

const request = require('request');
const fs = require('fs');


const fetch = function(URL, localFilePath) {
  request(URL, (error, response, body) => {
    fs.writeFile(localFilePath, body, err => {
      if (err) {
        console.error(err);
      }
      fs.stat(localFilePath, (err,stats) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
        }
      });
    });
  }); 
};

fetch(URL, localFilePath);

///////////////////////////////////////////////////////////////

// NOTES: FUNCTIONS USED AS CALLBACK

// request(URL, (error, response, body) => {
//   console.log('error:', error); 
//   console.log('statusCode:', response && response.statusCode); 
//   console.log('body:', body);
// });


// fs.writeFile(localFilePath, body, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });
