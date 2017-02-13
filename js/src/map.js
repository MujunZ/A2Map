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
  };

  //marker event listeners
  var addListenerWrapper = function(i) { //Here wrap the following 3 functions up to ensure that each marker has a different "i"
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow, locations, i);
      this.setAnimation(google.maps.Animation.BOUNCE);
      self = this;
      setTimeout(function() {
        self.setAnimation(null);
      }, 750);
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
    var position = locations[i].location;
    title = locations[i].title;
    content = locations[i].content;
    yelpPhone = locations[i].yelpPhone;
    yelpImg = locations[i].yelpImg;
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      icon: minionIcon,
      //icon: defaultIcon,
      content: content,
      animation: google.maps.Animation.DROP,
      id: i
    });
    myLocation = locations[i]
    markers.push(marker);

    addListenerWrapper(i);
  };

  //show all markers
  showlistings();

  /*
   * @description click the name in the list to show the mark on the map
   */
  var locationBox = document.getElementsByClassName('locationBox');
  for (var i = 0, length1 = locationBox.length; i < length1; i++) {
    locationBox[i].addEventListener('click', (function(iCopy) {
      return function() {
        markers[iCopy].setMap(map);
      };
    })(i));
    locationBox[i].addEventListener('dblclick', (function(iCopy) {
      return function() {
        markers[iCopy].setMap(null);
      };
    })(i));
  };

  document.getElementById('searchbox').addEventListener('focus', hidelistings);

  // function showVisibleMarkers () {
  //   showlistings();
  //   var hiddenItems = $("li.locationBox:hidden");
  //   var locationBox = $("li.locationBox");
  //   var index = locationBox.indexOf(hiddenItems);
  //   console.log(index);
  // };
  // showVisibleMarkers();

  function showlistings() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the coundaries of the map for each marker and display the marker
    for (var i = 0, length1 = markers.length; i < length1; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  };

  function hidelistings() {
    for (var i = 0, length1 = markers.length; i < length1; i++) {
      markers[i].setMap(null);
    }
  }

  mapLoaded = true;
};

function createMarkerWindow(marker, i) {
  var yelpPhone = locations[i].yelpPhone;
  var yelpImg = locations[i].yelpImg;
  var $markerWindowTemplate = $('script[data-template="markerWindowTemp"]').html();
  windowContent = $markerWindowTemplate.replace(/{{id}}/g, marker.id).replace(/{{locationTitle}}/g, marker.title).replace(/{{locationPhone}}/g, yelpPhone).replace(/{{locationImg}}/g, yelpImg).replace(/{{locationContent}}/g, marker.content);
  return windowContent;
};

function populateInfoWindow(marker, infowindow, locations, i) {
  createMarkerWindow(marker, i);
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent(windowContent);
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function() {
      infowindow.close();
    });
  }
};

//Fallback message
setTimeout(function() {
  if (mapLoaded === false) {
    alert('Google map didn\'t load. Are you sure you are connected to the Internet and not in China?');
  };
}, 1000);