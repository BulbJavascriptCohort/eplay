const country = require("countryinfo");
const allRegionsWithData = country.regionsData()
let allRegionsArray=[]
for(const item in allRegionsWithData){
    allRegionsArray.push({ [item]: allRegionsWithData[item]})
}
// console.log(countryArray)

module.exports = allRegionsArray;
 