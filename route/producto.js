const express = require('express');
const router = express.Router();
//const {productos} = require('../db.json');
const {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct

} = require('../controllers/products');
//poniendo llaves seleccionamos solo productos de la bd

//console.log(productos);
//obtiene datos de la bd 
router.route('/')
.get(getProduct)
.post(addProduct)

router.route('/:id')
.put(updateProduct)
.delete(deleteProduct)

//agregar datos al arreglo 

//exportar router
module.exports = router;