const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  try {
    request(url, (err, resp, body) => {
      if (err) {
        return callback(`Failed to request details: ${err}`, null);
      }
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        return callback(null, breed.description);
      } else {
        return callback(`Failed to find breed ${breedName}`, null);
      }
    });
  } catch (error) {
    console.log("Sorry, an error occured. Please check your API endpoint.");
  }
};

module.exports = { fetchBreedDescription };
