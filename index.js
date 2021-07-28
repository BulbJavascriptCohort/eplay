const express = require('express')
const morgan = require('morgan')
const path = require("path")
const http = require("http")

const bankModel = require("./model/bank.model.js")
const state = require("./model/region.model.js")

const app = express()
const port = 3000
const publicPath = path.resolve(__dirname, "public")
const viewsPath = path.resolve(__dirname, "views")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


// index addresss - home page - landing page
// index <===> default

app.use(morgan())

app.use(express.static(publicPath))


app.get('/', (req, res) => {
    // res.send('Welcome to the landing')
    res.render('home/')
})
app.get('/contact', (req, res) => {
    res.send('Welcome to the contact')
})
app.get('/about', (req, res) => {
    res.send('Welcome to the about')
})
app.get('/matthew', (req, res) => {
    res.send('Matthew Rules This World')
})

app.get('/tunde/:hi', (req, res) => {
    res.end(`Trafiky is here ${
        req.params.hi
    }`)
})

app.get('/writers/', (req, res) => {
    res.end(`It will list all writers`)
})

app.get('/writers/:id/', (req, res) => {
    res.end(`It will one writer with id of ${
        req.params.id
    }`)
})


app.get('/shows/:hi', (req, res) => {
    res.end(`Trafiky is here ${
        req.params.hi
    }`)
})

app.get('/ratings/:hi', (req, res) => {
    res.end(`Trafiky is here ${
        req.params.hi
    }`)
})

app.post("/eben", (req, res) => {
    res.send('What will eben do?')
})

app.get('/hotels/', (req, res) => {
    // res.end(`It will list all hotels`)
    res.render("hotels/show.ejs")
})

app.get('/hotels/:location', (req, res) => {
    res.end(`It will list all hotels in a location ${
        req.params.location
    }`)
})

app.get('/hotels/:location/:filter', (req, res) => {
    res.end(`It will list all hotels in ${
        req.params.location
    } that is ${
        req.params.filter
    }`)
})


// Nigerian Banks App
app.get('/banks', (req, res) => {
    // res.send(bankModel.module.index())
    res.render("banks/", {data : bankModel.module.index()})
})

app.get('/banks/:index', (req, res) => {

    const bankIndex = parseInt(req.params.index)
    const totalBanks = bankModel.module.index().length
    if (bankIndex > totalBanks) {
        res.writeHead(400, {'Content-Type': 'text/plain'})
        res.end("Error 404: Solomon is missing.")
    }

    // console.log( bankIndex, bankModel.module.bank( bankIndex ) )
    // res.send(bankModel.module.bank(bankIndex))
    res.render("banks/show", {data : bankModel.module.bank(bankIndex)})
})

const linkToHTML = path.join(__dirname, "./views", "html", "one.html")

// Nigerian States App
app.get('/states', (req, res) => { // res.send(state.index())
    const allStates = state.index()
    const playState = { "eben" : "iyin", "lola" : "red", "tecno" : "samsung" }
    // res.send(allStates)
    res.render('states', {playState: playState, allStates : allStates})
})

app.post("/states", (req, res) => {})

app.get('/states/:id', (req, res) => {

    const stateIndex = parseInt(req.params.id)

    // res.send(state.show(stateIndex))
    res.render("states/show", {data : state.show(stateIndex)})
})

app.use(function (req, res) {
    res.writeHead(400, {'Content-Type': 'text/plain'})
    res.end(`Error 404: Resource is missing. Go back home ${__dirname}`)
})


// app.get('/iyin', (req, res) => {
// console.log( app )
// res.send('Iyin World!')
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
