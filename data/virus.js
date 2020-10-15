const fetch = require('node-fetch');
const dotenv = require('dotenv').config();// Habilita el acceso a las variables de retorno

async function getTotals(){
    const option = {
        headers: {
            "x-rapidapi-key": process.env.KEYRAPIDAPI
        }
    };
    let data = await fetch("https://covid-19-data.p.rapidapi.com/totals", option);
    data = await data.json();

    return data;
}

module.exports = {getTotals};