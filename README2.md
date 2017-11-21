# MKM API Client

This is a simple node JS client for MKM API.

You first need to request your keys and tokens from magiccardmarket.eu .

### Installation

`npm install mkm-api`

### Usage

```javascript
var mkmApi = require("mkm-api");
const MkmApiClient = require('mkm-api');
const Client = new MkmApiClient('8KubOJdWwiiZcNl0', 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F');
Client.setAccessTokens('0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA','arWRKwBANlY10eTBHxCzZxGOlG9eZIG3');
Client.get('/ws/v2.0/output.json/products/find', {search: 'Time walk'}).then(res=> {
    console.log(res.response);
}).catch(e => {
    // oops..
});
```

The Client only accepts `.get` and `.post` methods for now. But you can use:

```javascript
Client.request('PUT', '/ws/v2.0/products/find', {search: 'something to search'});
```

To use any method.

If you need access tokens for 3d party apps, you can use the method: 

```javascript
Client.setAccessTokens(<access_token>, <access_token_secret>);
```

### Full usage

#### `.request`

The full method is defined as:

```javascript
Client.request = function(method, path, data, headers, tokens);
```

Meaning that you can set your own `headers` and `tokens`. 

> Note that if you set tokens in this request (or in `.get` and `.post` methods),
they will override those set by `setAccessTokens`.

# mkm-api-client
