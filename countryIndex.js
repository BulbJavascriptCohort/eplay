const express = require("express");
const morgan = require("morgan");
const path= require("path") 
//object destructuring e.g let student ={ayo:tunde, bala:kabiru} is same as
// {ayo,bala}= student
const {
	index,
	getRegion,
	countries,
	getOneCountry,
} = require("./model/countries.model.js");
// console.log(index)

const app = express();

app.use(morgan());

const PORT = 4000;
//to couple model to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/countries", (req, res) => {
	// res.send(
	// 	countryArray[0]["centralAsia"]["countries"][0]["currencies"][0]["currency"]
	// );
	// console.log(country)
	const allWorldCountries = index();
	// res.send(allWorldCountries);
	res.render("countryInfo/", { allWorldCountries });
});

// app.get('/countryInfo/',(req,res)=>{
// 	res.render("countryInfo/index.ejs")
// })
app.get("/:regionName/:onecountry", (req, res) => {
	res.send(getOneCountry(req.params.regionName, req.params.onecountry));
});
app.get("/:regionName", (req, res) => {
	res.send(getRegion(req.params.regionName));
});
app.get("/:regionName/countries", (req, res) => {
	res.send(countries(req.params.regionName));
});

app.listen(PORT, () => {
	console.log("app is running on port: " + PORT);
});

app.use(function (req, res) {
	res.writeHead(400, { "Content-Type": "text/plain" });
	res.end(`Error 404: Resource is missing. Go back home ${__dirname}`);
});
