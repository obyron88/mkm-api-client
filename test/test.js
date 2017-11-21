const MkmClient = require('../mkm.js');
const percentencode = require('oauth-percent-encode');

const expect = require('chai').expect;

const Client = new MkmClient();

var params = {
    oauth_consumer_key: '8KubOJdWwiiZcNl0',
    oauth_nonce: '53eb1f44909d6',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: 1407917892,
    oauth_token: '0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA',
	oauth_version : '1.0'

};


describe('Return tests', function(){
	it('Should build params like in the docs', function(){
		expect(percentencode(Client.__utils.buildParams(params))).to.be.eql('oauth_consumer_key%3D8KubOJdWwiiZcNl0%26oauth_nonce%3D53eb1f44909d6%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1407917892%26oauth_token%3D0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA%26oauth_version%3D1.0');
	});

	it('Should get correct signing key', function(){
		expect(Client.__utils.getSigningKey({
			secret: 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F',
			access_token_secret: 'arWRKwBANlY10eTBHxCzZxGOlG9eZIG3'
		})).to.be.eql('IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F&arWRKwBANlY10eTBHxCzZxGOlG9eZIG3');
	});

	it('Should get correct signing key without access_token_secret', function(){
		expect(Client.__utils.getSigningKey({
			secret: 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F'
		})).to.be.eql('IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F&');
	});

	it('Should get final string', function(){
		expect(Client.__utils.getFinalString('GET','/ws/v2.0/account', params)).to.be.eql('GET&https%3A%2F%2Fwww.mkmapi.eu%2Fws%2Fv2.0%2Faccount&oauth_consumer_key%3D8KubOJdWwiiZcNl0%26oauth_nonce%3D53eb1f44909d6%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1407917892%26oauth_token%3D0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA%26oauth_version%3D1.0');
	});

	it('Should get correct signature from API Docs', function(){
		var signature = Client.__utils.getSignature('GET', '/ws/v2.0/account', params, {
			app_key: '8KubOJdWwiiZcNl0',
			secret: 'IfjCXmLTlJnx1pVuxnJbxSdUzxQ1Y74F',
			access_token: '0Yp1RBQa0ivOQvU0pCS2bVGDHJ6YyypA',
			access_token_secret: 'arWRKwBANlY10eTBHxCzZxGOlG9eZIG3'
		});

		expect(signature).to.be.eql('DLGHHYV9OsbB/ARf73psEYaNWkI=');
	});
});
