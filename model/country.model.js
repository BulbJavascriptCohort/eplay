const country = require('countryinfo') ;

const data = country.regionsData() ;

const regions = [];
result =[] ;

for (const region in data) { regions.push(data[region]) };

regions.forEach((item) => {
    item.countries.forEach((country) => {
        result.push([country.names.en[0],country.emoji]) ;
    })
});







const index = () => {
    return result ;
}

module.exports ={ index} ;