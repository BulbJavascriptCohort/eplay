const country = require("countryinfo")

const index = () => {
 	
 	const allRegionsArray  = Object.keys(country.regionsData())

 	return	allRegionsArray.map( (region) => 
 		 ( 
 		  country.regionsData(region) 
 		 )
 	)

}

console.log( index() )

module.exports = {
    index,
}