
    const MkmApiClient = require('./mkm.js');
    const Client = new MkmApiClient('8KubOJdWwiiZcNl0', 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F');
    cardid= "";
    Client.setAccessTokens('0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA','arWRKwBANlY10eTBHxCzZxGOlG9eZIG3');
    Client.get('/ws/v2.0/output.json/products/find', {search:"akroma"}).then(res=> {
        card=JSON.parse(res.response);
        cardid=card.product[0].idProduct;
        //console.log(card.product[0].idProduct);
        Client.get('/ws/v2.0/output.json/products/' + cardid).then(res=> {
            product=JSON.parse(res.response);
            priceObject=product.product.priceGuide;
            console.log(priceObject);
        }).catch(e => {
            // oops..
        });
    }).catch(e => {
        // oops..
    });


