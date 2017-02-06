var map;
var markers = [];

function initMap () {
  var stylesDeStijl = new google.maps.StyledMapType(DeStijl,{name:'DeStijl'});
  var stylesNeon = new google.maps.StyledMapType(Neon,{name:'Neon'});

  /*
  * @description make map
  */
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 42.25, lng: -83.698},
    // styles: DeStijl,
    // mapTypeControl: false,
     mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain','DeStijl','Neon']
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
  var defaultIcon = makeMarkerIcon('002FA7');
  var highlightedIcon = makeMarkerIcon('FFED00');

  // draw markers ref: https://developers.google.com/maps/documentation/javascript/markers
  function makeMarkerIcon (markerColor) {
    var markerImage = {
      url: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor + '|40|_|%E2%80%A2',
      size: new google.maps.Size(21,34),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(10,34),
      scaledSize: new google.maps.Size(21,34)
      };
    return markerImage;
  };

  // set marker values
  for(var i = 0; i < locations.length; i++){
    var position = locations[i].location;
        title = locations[i].title;
        content = locations[i].content;
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      // icon: 'http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png',
      icon: defaultIcon,
      content: content,
      animation: google.maps.Animation.DROP,
      id: i
    }); 
    markers.push(marker);
    marker.addListener('click', function () {
      populateInfoWindow(this, largeInfowindow);
    });

    marker.addListener('mouseover', function () {
      this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function () {
      this.setIcon(defaultIcon);
    });
  };

  //show all markers
  showlistings();

  /*
  * @description click the name in the list to show the mark on the map
  */
  var locationBox = document.getElementsByClassName('locationBox');
  for(var i = 0, length1 = locationBox.length; i < length1; i++){
    locationBox[i].addEventListener('click',(function (iCopy) {
      return function () {
        markers[iCopy].setMap(map);
      };
    })(i));
  };

  document.getElementById('show-listings').addEventListener('click',showlistings);
  document.getElementById('hide-listings').addEventListener('click',hidelistings);

  function showlistings () {
    var bounds = new google.maps.LatLngBounds();
    // Extend the coundaries of the map for each marker and display the marker
    for(var i = 0, length1 = markers.length; i < length1; i++){
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  };

  function hidelistings (argument) {
    for(var i = 0, length1 = markers.length; i < length1; i++){
       markers[i].setMap(null);
     } 
  }

};

function populateInfoWindow (marker, infowindow) {
  if (infowindow.marker != marker){
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '<div><p>' + marker.content + '</p>');
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function(){
      infowindow.close(); 
    });
  }
};