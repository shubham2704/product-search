const axios = require('axios');
const cheerio = require('cheerio');

let url = 'https://www.amazon.in/s?k=redmi+9+pro';

axios.get(url).then((response) => {
    if (response.status === 200){
        const $ = cheerio.load(response.data);
        $('span').each(function(i, e){
            let links = $(e).children('a-price-whole').attr('class');
            console.log(links);
        })
    }
}).catch((e) => {
    console.log(e);
});