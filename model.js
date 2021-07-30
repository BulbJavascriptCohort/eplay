const country = require("countryinfo");

const allData = country.regionsData();

const allDataKeys = Object.keys(allData);

const allDataArray = allDataKeys.map(dataKey => {
  return allData[dataKey];
});

const getRegion = regionName => {
  return allDataArray.find(
    data => data.name.toLowerCase() === regionName.toLowerCase()
  );
};

const getCountries = regionName => {
  const defaultCountries = getRegion(regionName).countries;
  const fromattedCountries = defaultCountries.map(country => ({
    name: country.names.en,
    currency: country.currencies,
    callingCodes: country.callingCodes,
    emoji: country.emoji,
    languages: country.languages,
  }));
  return fromattedCountries;
};

const getCountryByName = (regionName, countryName) => {
  const countries = getCountries(regionName);
  return countries.find(country =>
    country.name.map(i => i.toLowerCase()).includes(countryName.toLowerCase())
  );
};

// console.log(getAllRegions());

module.exports = {
  allDataArray,
  getRegion,
  getCountries,
  getCountryByName,
};
