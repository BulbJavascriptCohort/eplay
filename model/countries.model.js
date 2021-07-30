const allcountries = require("../db/worldCountries.db.js");

/**
 * return all countries
 *
 * @return [all the countries]
 */
function index() {
	// console.table(countries.module)
	return allcountries.module;
}

function oneCountry(index) {
	return allcountries.module[index];
}

exports.module = {
	index,
	oneCountry,
};
