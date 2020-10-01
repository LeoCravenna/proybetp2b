const fs = require('fs').promises;
const PATHMOCInventors = __dirname + '/inventors.json' // Me devuelve la carpeta del proyecto donde estoy parado

async function readMocInventor(){
    // Termina la lectura gracias al await y hace el parseo del JSON para retornar a la otra función
    return JSON.parse(await fs.readFile(PATHMOCInventors, 'utf-8'));
}

async function writeMocInventor(inventors){
    await fs.writeFile(PATHMOCInventors, JSON.stringify(inventors, null, ' '));
}

async function getAllInventors(){
    return (await readMocInventor());
}

async function getInventor(id){
    // TODO: implementar el get para traer un inventor por id
    let data = await getAllInventors();
    let inventor = data.inventors.find(inventor => inventor._id == id); 
    return inventor;
}

// Esta función da de alta a un objeto Inventor
async function pushInventor(inventor){
    const data = await getAllInventors();
    data.inventors.push(inventor);
    await writeMocInventor(data);
}

// Esta función permite modificar un objeto Inventor
async function updateInventor(inventor){
    const data = await getAllInventors();
    const index = data.inventors.findIndex(value => value._id == inventor._id); // Me devuelve el index del que quiero modificar
    data.inventors[index].first = inventor.first;
    data.inventors[index].last = inventor.last;
    data.inventors[index].year = inventor.year;
    data.inventors[index].img = inventor.img;

    await writeMocInventor(data);
}

// Esta función eliminar un inventor por id
async function deleteInventor(id){
    const data = await getAllInventors();
    data.inventors.splice(
        data.inventors.findIndex(value => value._id == id),
        1 // Acá le decís cuantos queres eliminar a partir de que encuentra el indice
    );
    await writeMocInventor(data);
}

module.exports = {getAllInventors, getInventor, pushInventor, updateInventor, deleteInventor}