const request = require("request");
const catBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`

try {
  request(
    url,
    (err, resp, body) => {
      if (err) {
        console.log("Requesting URL does not exist!");
      }
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        console.log(breed.description);
      } else {
        console.log(`Failed to find breed ${breedName}`);
      }
    }
  );
} catch (error) {
  console.log("Sorry, an error occured. Please check your API endpoint.");
}
