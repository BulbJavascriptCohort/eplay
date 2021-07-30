const countries = require('countryInfo')


function index(){

	return countries.module
}

function country(index){
	return countries.module[index]
}

exports.module = {
    index,
	country
}

