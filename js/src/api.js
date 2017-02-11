    //yelp
    /**
    * Generates a random number and returns it as a string for OAuthentication
    * @return {string}
    */
var yelpBusinessInfo = function (locationItem) {
  function nonce_generate() {
    return (Math.floor(Math.random() * 1e12).toString());
  };
  // var yelp_url = "https://api.yelp.com/v2/search?";
  var yelp_url = "https://api.yelp.com/v2/business/";

  var YELP_KEY = "CyaDrXaf6BP3dbxVVkzOaQ";
      YELP_TOKEN = "x8Gpg1Nwc76RQa5_41AqVwsVvVhpnATA";
      YELP_KEY_SECRET = "kfvgXm5uTPfd25WGalVKsrqu9HE";
      YELP_TOKEN_SECRET = "t4_VZDvjXtJdVT36OSfpY3DaOt4";
  var parameters = {
    term: 'cream puff', 
    location: 'Ann Arbor',
    id: locationItem.yelp_id,
    oauth_consumer_key: YELP_KEY,
    oauth_token: YELP_TOKEN,
    oauth_nonce: nonce_generate(),
    oauth_timestamp: Math.floor(Date.now()/1000),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version : '1.0',
    callback: 'cb'              // This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
  };

  var encodedSignature = oauthSignature.generate('GET',yelp_url + parameters.id, parameters, YELP_KEY_SECRET, YELP_TOKEN_SECRET);
  parameters.oauth_signature = encodedSignature;

  var settings = {
    url: yelp_url + parameters.id,
    data: parameters,
    cache: true,                // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
    dataType: 'jsonp',
    success: function(results) {
      locationItem.yelpName = results.name;
      locationItem.yelpPhone = results.display_phone;
      locationItem.yelpImg = results.image_url;
    },
    error: function() {
      locationItem.yelpPhone = 'Can\'t get data from Yelp.';
    }
  };

  // Send AJAX query via jQuery library.
  $.ajax(settings);
};

/*
* @description set yelp value to locations
*/
locations.forEach(function (locationItem) {
  yelpBusinessInfo(locationItem);
});

