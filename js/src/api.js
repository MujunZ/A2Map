function fourSquareInfo(locationItem,infowindow) {
    var clientID = 'EQZYLLLIO3W12LHM1IF0FETRZM5DF0QSNKCMFSUHP0S1QA3P',
        clientSecret = 'ZBJ0X0JGO5DQBJEUXGBLZ4ARTZD11QLQKZJTVGOANSW10MGK',
        name = locationItem.marker.title,
        lat = locationItem.position.lat,
        lng = locationItem.position.lng;
    var fourSquareUrl = 'https://api.foursquare.com/v2/venues/search?ll=' + lat + ',' + lng + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20170215&query=' + name + '&limit=1';
    $.ajax({
        url: fourSquareUrl,
        dataType: "jsonp",
    }).done(function(results) {
        var data = results.response.venues[0];
        data.contact.formattedPhone !== null ? locationItem.contact = data.contact.formattedPhone : locationItem.contact = 'No data from Foursqueare';
        data.menu !== null ? locationItem.menu = data.menu.mobileUrl : locationItem.menu = 'https://foursquare.com/';
        locationItem.createMarkerWindow();
        if (infowindow.marker != locationItem.marker) {
          infowindow.marker = locationItem.marker;
          infowindow.setContent(locationItem.windowContent);
          infowindow.open(map, locationItem.marker);
          infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        })};
    }).fail(function() {
        console.log('Can\'t get data from Foursqueare.');
        locationItem.contact = 'Can\'t get data from Foursqueare.';
    });
}