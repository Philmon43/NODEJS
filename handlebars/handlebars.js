const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')
const partialsPath = path.join(__dirname, './partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))


app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    })
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "contact"
    })
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})