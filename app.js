// OLD CODE     

// const axios = require('axios');
// const cheerio = require('cheerio');

// let url = 'https://www.amazon.in/s?k=redmi+9+pro';

// axios.get(url).then((response) => {
//     if (response.status === 200){
//         const $ = cheerio.load(response.data);
//         $('span').each(function(i, e){
//             let links = $(e).children('a-price-whole').attr('class');
//             console.log(links);
//         })
//     }
// }).catch((e) => {
//     console.log(e);
// });


  
var cheerio = require('cheerio');
var request = require('request');

var pagesToScrape = [
    'https://www.amazon.in/s?k=redmi+9'
];


for(var i = 0; i < pagesToScrape.length; i++) {
	
	request(pagesToScrape[i], function (error, response, body) {

		if (!error && response.statusCode == 200) {
	    
			$ = cheerio.load(body);

			var amazonData = {};
			
			amazonData['name']          = $('meta[name="title"]').attr('content');
			amazonData['description']   = $('meta[name="description"]').attr('content');
			amazonData['Price']     = `${$('span.a-price-whole').text()} `; 
			amazonData['image']         = $(".a-dynamic-image").attr('src');

        	console.log(amazonData);
		}

	})
}
  
