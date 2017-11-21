var mkmApi = require("mkm-api");
const MkmApiClient = require('mkm-api');
const Client = new MkmApiClient('8KubOJdWwiiZcNl0', 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F');
Client.setAccessTokens('0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA','arWRKwBANlY10eTBHxCzZxGOlG9eZIG3');
Client.get('/ws/v2.0/output.json/products/find', {search: 'akroma'}).then(res=> {
    console.log(res.response);
}).catch(e => {
    // oops..
});