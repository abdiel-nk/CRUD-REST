
const {productos} = require('../db.json');

module.exports = {
    getProduct:(req, res ) =>{
        res.json({productos})
    },
    addProduct: (req,res )=>{
        //console.log(req.body);
       const {name} =  req.body;
       productos.push({
           name,
           id: productos.length
       }) 
        res.json({ 
            'succes': true, 
            'msg': 'sucessfully added'
        });
    },
    updateProduct: (req ,res) =>{
        const {id} = req.params;
        const {name} = req.body;

        productos.forEach((productos,i)=>{
            if(productos.id ===Number(id)) {
                productos.name = name;
            }
        });

        res.json({
            'success':true,
            'msg':'succesfully added'
        })
    },

    deleteProduct: (req ,res) =>{
        const {id} = req.params;

        productos.forEach((productos,i)=>{
            if(productos.id ===Number(id)) {
                productos.splice(i,1);
            }
        });

        res.json({
            'success':true,
            'msg':'succesfully added'
        })
    },

   
}