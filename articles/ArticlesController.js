const express = require("express");
const router = express.Router();

router.get("/articles", (res, req) => {
    res.send("Novo artigo");
});


router.get("/admin/articles/new", (res, req) => {
    res.send("Rota de categorias");
});



module.exports =  router;