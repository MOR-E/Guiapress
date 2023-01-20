const express = require("express");
const router = express.Router();

router.get("/categories", (res, req) => {
    res.send("Rota de categorias");
});


router.get("/admin/categories/new", (res, req) => {
    res.send("Rota de categorias");
});

module.exports =  router;