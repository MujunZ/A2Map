var map,
  markers = [],
  windowContent,
  mapLoaded = false;

function initMap() {
  var stylesDeStijl = new google.maps.StyledMapType(DeStijl, {
    name: 'DeStijl'
  });
  var stylesNeon = new google.maps.StyledMapType(Neon, {
    name: 'Neon'
  });

  /*
   * @description make map
   */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 42.25,
      lng: -83.698
    },
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'DeStijl', 'Neon']
    },
    zoom: 12
  });

  mapLoaded = true;

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('DeStijl', stylesDeStijl);
  map.mapTypes.set('Neon', stylesNeon);
  map.setMapTypeId('DeStijl');

  var largeInfowindow = new google.maps.InfoWindow();

  /*
   * @description make markers
   */
  var defaultIcon = makeMarkerIcon('FF0080');
  var highlightedIcon = makeMarkerIcon('FFED00');
  var minionIcon = "http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png";

  // draw markers ref: https://developers.google.com/maps/documentation/javascript/markers
  function makeMarkerIcon(markerColor) {
    var markerImage = {
      url: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2',
      size: new google.maps.Size(21, 34),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(10, 34),
      scaledSize: new google.maps.Size(21, 34)
    };
    return markerImage;
  }

  //marker event listeners
  var addListenerWrapper = function(i) { //Here wrap the following 3 functions up to ensure that each marker has a different "i"
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow, locations, i);
      this.setAnimation(google.maps.Animation.BOUNCE);
      self = this;
      setTimeout(function() {
        this.setAnimation(null);
      }.bind(this), 750);
    });

    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function() {
      this.setIcon(minionIcon);
    });
  };

  // set marker values
  for (var i = 0; i < locations.length; i++) {
    var position = locations[i].location,
    title = locations[i].title,
    content = locations[i].content,
    contact = locations[i].contact,
    visible = locations[i].visibility;
    locations[i].marker = new google.maps.Marker({
      position: position,
      title: title,
      icon: minionIcon,
      content: content,
      visible: visible,
      animation: google.maps.Animation.DROP,
      id: i
    });
    var marker = locations[i].marker;
    markers.push(marker);
    addListenerWrapper(i);
    
  }
  //show all markers
  showlistings();

  function showlistings() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the coundaries of the map for each marker and display the marker
    for (var i = 0, length1 = markers.length; i < length1; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }

  function hidelistings() {
    for (var i = 0, length1 = markers.length; i < length1; i++) {
      markers[i].setMap(null);
    }
  }

  ko.applyBindings(new ViewModel());
}

function createMarkerWindow(marker, i) {
  var contact = locations[i].contact;
  var menu = locations[i].menu;
  var $markerWindowTemplate = $('script[data-template="markerWindowTemp"]').html();
  windowContent = $markerWindowTemplate.replace(/{{id}}/g, marker.id).replace(/{{locationTitle}}/g, marker.title).replace(/{{locationPhone}}/g, contact).replace(/{{menu}}/g, menu).replace(/{{locationContent}}/g, marker.content);
  return windowContent;
}

function populateInfoWindow(marker, infowindow, locations, i) {
  createMarkerWindow(marker, i);
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent(windowContent);
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
  }
}

// fail message
function mapError () {
  if (mapLoaded === false) {
    alert('Google map didn\'t load. Are you sure you are connected to the Internet and not in China?');
  }
}
