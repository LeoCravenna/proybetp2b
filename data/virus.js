const fetch = require('node-fetch');

async function getTotals(){
    const option = {
        headers: {
            "x-rapidapi-key": "b4bebccef7mshf826d0d0f5150fbp1472ccjsn9d06f25ea500"
        }
    };
    let data = await fetch("https://covid-19-data.p.rapidapi.com/totals", option);
    data = await data.json();

    return data;
}

module.exports = {getTotals};