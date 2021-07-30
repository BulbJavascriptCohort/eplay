const express = require("express");
const path = require("path");
const morgan = require("morgan");

const {
  allDataArray,
  getRegion,
  getCountries,
  getCountryByName,
} = require("./model");

const app = express();
const PORT = process.env.PORT || 7777;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan());

app.get("/", (req, res) => {
  // res.send("country info api");
  res.render("home/");
  // res.send(allDataArray);
});

app.get("/regions", (req, res) => {
  // res.send(allDataArray);
  res.render("regions/", { allDataArray });
});

app.get("/regions/:regionName", (req, res) => {
  const region = getRegion(req.params.regionName.toLowerCase());
  res.render("regions/showRegion", { region });
  // res.send(region);
});

app.get("/regions/:regionName/countries", (req, res) => {
  // console.log(req.params.regionName.split("%20").join(" "));
  const countries = getCountries(req.params.regionName.split("%20").join(" "));
  res.send(countries);
  res.send(req.params.regionName);
});

app.get("/regions/:regionName/country/:countryName", (req, res) => {
  const country = getCountryByName(
    req.params.regionName,
    req.params.countryName
  );
  res.render("country/", { country });
  // res.send(country);
});

app.listen(PORT, () => {
  console.log("country info server running on port: " + PORT);
});
