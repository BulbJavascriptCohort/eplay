const country = require("countryinfo");
const regionsData = country.regionsData();
const regionNames = Object.keys(regionsData);

const listOfAfricanCountries = regionsData['africa'].countries.map(country => {
  return {
    name: country.names.en[0],
    emoji: country.emoji
  }
})

module.exports = listOfAfricanCountries;