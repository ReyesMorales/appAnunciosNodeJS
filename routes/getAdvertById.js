var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');


router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const anuncio = await Anuncio.findById(id);
        res.json(anuncio);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
