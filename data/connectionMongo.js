// mongodb+srv://admin:<betp2b>@cluster0.0mnuu.mongodb.net/<sample_betp2b>?retryWrites=true&w=majority

const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const dotenv = require('dotenv').config();// Habilita el acceso a las variables de retorno

// TODO: Cambiar por variables de entorno
const uriMongo = process.env.URIMONGO;
console.log(uriMongo);
const client = new mongoClient('uriMongo', { useUnifiedTopology: true, useNewUrlParser: true });

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.red(err)));
}
// Exporto la conexión para usarlo en otros modulos
module.exports = {getConnection};