const allRegionsArray = require("../db/worldCountries.db.js");


// console.log(allRegionsArray)
/**
 * return all countries
 *
 *  [all the countries]
 */
function index() {
	return allRegionsArray;
}

function getRegion(regionName) {
	for(let i=0;i < allRegionsArray.length;i++){
		if(allRegionsArray[i][regionName.toLowerCase()]){
			return allRegionsArray[i][regionName]
		}
	}
	return "resource does not exist"
	
}
function countries(region) {
	let regionData = getRegion(region)
	
	return regionData['countries']
	
}

function getOneCountry(region, country){
	let countryData=countries(region)
	const filteredCountry = countryData.filter(function(nation){
		return nation['names']['en']
		.map(name => name.toLowerCase())
		.includes(country.toLowerCase())
	})
	return filteredCountry[0];
	
}

module.exports = {
	index,
	getRegion,
	countries,
	getOneCountry,
};
