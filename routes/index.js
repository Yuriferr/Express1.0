const express = require('express');
const router = express.Router();
const ProjetoController = require('../controllers/projeto-controler');


router.get('/',async(req,res,next)=>{
    const ProjetoData = await ProjetoController.getData();
    res.render('index', ProjetoData);
})

module.exports = router;