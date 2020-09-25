// PROBAR CON EL POSMAN
// BODY - RAW - JSON
// http://localhost:3000/api/inventors/54 o http://localhost:3000/api/inventors (Esto es con GET)
// http://localhost:3000/api/inventors (Esto es con POST)
// http://localhost:3000/api/inventors/54 (Esto es con PUT)
// http://localhost:3000/api/inventors/54 (Esto es con DELETE)

let express = require('express');
let router = express.Router();

/* GET Listado de Inventores */
router.get('/', function(req, res, next) {
  res.send('Listado de Inventores');
});

// GET de un inventor
// /inventors/56
router.get('/:id', (req, res) =>{
    res.send('Obtiene un inventor');
});

// POST alta de un inventor
router.post('/', (req, res) =>{
    res.send('Alta de inventor');
});

// PUT modificacion de un inventor
router.put('/:id', (req, res) =>{
    res.send(`Modificación del inventor ${req.params.id}`);
});

// DELETE eliminar un inventor
router.delete('/:id', (req, res) =>{
    res.send(`Eliminación del inventor ${req.params.id}`);
});

module.exports = router;