// PROBAR CON EL POSMAN
// BODY - RAW - JSON
// http://localhost:3000/api/inventors/54 o http://localhost:3000/api/inventors (Esto es con GET)
// http://localhost:3000/api/inventors (Esto es con POST)
// http://localhost:3000/api/inventors/54 (Esto es con PUT)
// http://localhost:3000/api/inventors/54 (Esto es con DELETE)

let express = require('express');
let router = express.Router();
const dataInventor = require('./../data/Inventor');

/* GET Listado de Inventores */
router.get('/', async function(req, res, next) {
    res.json(await dataInventor.getAllInventors());
});

// GET de un inventor
// /inventors/56
router.get('/:id', async (req, res) =>{
    res.json(await dataInventor.getInventor(req.params.id));
    //res.send('Obtiene un inventor');
});

// POST alta de un inventor
router.post('/', async (req, res) =>{
    const inventor = req.body; // Me devuelve un Objeto, su id
    await dataInventor.pushInventor(inventor);
    const inventorPersistido = await dataInventor.getInventor(inventor._id);
    res.json(inventorPersistido);
    //res.send('Alta de inventor');
});

// PUT modificacion de un inventor
router.put('/:id', async (req, res) =>{
    const inventor = req.body; // Me devuelve un Objeto, su id
    inventor._id = req.params.id;
    await dataInventor.updateInventor(inventor);
    res.json(await dataInventor.getInventor(req.params.id));
    //res.send(`Modificación del inventor ${req.params.id}`);
});

// DELETE eliminar un inventor
router.delete('/:id', async (req, res) =>{
    await dataInventor.deleteInventor(req.params.id);
    res.send('Inventor eliminado');
    //res.send(`Eliminación del inventor ${req.params.id}`);
});

module.exports = router;