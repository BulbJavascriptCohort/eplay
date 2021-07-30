"use strict";
const country = require("countryinfo");

const countCount = country.regionsData();
const allData = Object.keys(countCount);
const arrayOfData = allData.map(function (key) {
  return countCount[key];
});

function region(regionName) {
  return arrayOfData.find((data) => data.name.toLowerCase() === regionName);
}

function countries(regionName) {
  const originalCountries = region(regionName).countries;
  const changedCountries = originalCountries.map((country) => ({
    name: country.names.en,
    currency: country.currencies,
    callingCode: country.callingCodes,
    emoji: country.emojis,
    languages: country.languages,
  }));
  return changedCountries;
}
function countryByName(regionName, countryName) {
  const getCountries = countries(regionName);
  return getCountries.find((country) =>
    country.name.map((i) => i.toLowerCase()).includes(countryName.toLowerCase())
  );
}

module.exports = {
  arrayOfData,
  region,
  countries,
  countryByName,
};
