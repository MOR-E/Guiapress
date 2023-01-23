const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

const categoriesConstroller = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require ("./articles/Article");
const Category = require("./categories/Category");

//view engine
app.set('view engine', 'ejs');

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static
app.use(express.static("public"));

//Database
connection 
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    }).catch((error) => {
        console.log("Error")
    })

app.use("/", categoriesConstroller);
app.use("/articles", articlesController);    

app.get("/", (req, res) => {
    res.render("index");
}) 

app.listen(8080, () => {
    console.log("servidor rodando");
})