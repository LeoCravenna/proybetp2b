// mongodb+srv://admin:<betp2b>@cluster0.0mnuu.mongodb.net/<sample_betp2b>?retryWrites=true&w=majority

const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');

// TODO: Cambiar por variables de entorno
const uriMongo = 'mongodb+srv://admin:betp2b@cluster0.0mnuu.mongodb.net/sample_betp2b?retryWrites=true&w=majority';

const client = new mongoClient('uriMongo', { useUnifiedTopology: true, useNewUrlParser: true });

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.red(err)));
}
// Exporto la conexión para usarlo en otros modulos
module.exports = {getConnection};