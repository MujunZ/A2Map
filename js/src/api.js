function fourSquareInfo (locationItem) {
  var clientID = 'EQZYLLLIO3W12LHM1IF0FETRZM5DF0QSNKCMFSUHP0S1QA3P',
      clientSecret = 'ZBJ0X0JGO5DQBJEUXGBLZ4ARTZD11QLQKZJTVGOANSW10MGK',
      name = locationItem.title,
      lat = locationItem.location.lat,
      lng = locationItem.location.lng;  
  var fourSquareUrl = 'https://api.foursquare.com/v2/venues/search?ll='+lat+','+lng+'&client_id='+ clientID +'&client_secret=' + clientSecret + '&v=20170215&query='+ name +'&limit=1';
  $.ajax({
      url: fourSquareUrl,
       dataType: "jsonp",
       }).done(function (results) {
          var data = results.response.venues[0]
          data.contact.formattedPhone !=null ? locationItem.contact = data.contact.formattedPhone: locationItem.contact = 'No data from Foursqueare';
          data.menu !=null ? locationItem.menu = data.menu.mobileUrl: locationItem.menu = 'https://foursquare.com/';
        }).fail(function() {
            locationItem.formattedPhone = 'Can\'t get data from Foursqueare.';
        });
}

locations.forEach(function(locationItem) {
  fourSquareInfo(locationItem);
});
