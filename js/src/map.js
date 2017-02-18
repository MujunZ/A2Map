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

    var minionIcon = "http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png";


    //set marker values
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location,
            title = locations[i].title,
            content = locations[i].content,
            contact = locations[i].contact,
            idx = locations.indexOf(locations[i]),
            visible = locations[i].visibility;
        locations[i].marker = new google.maps.Marker({
            position: position,
            title: title,
            icon: minionIcon,
            content: content,
            visible: visible,
            animation: google.maps.Animation.DROP,
            id: idx
        });
        var marker = locations[i].marker;
        markers.push(marker);
    }

    //show all markers
    (function showlistings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the coundaries of the map for each marker and display the marker
        for (var i = 0, length1 = markers.length; i < length1; i++) {
            markers[i].setMap(map);
            bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
    }());

    ko.applyBindings(new ViewModel());
}

// fail message
function mapError() {
    if (mapLoaded === false) {
        alert('Google map didn\'t load. Are you sure you are connected to the Internet and not in China?');
    }
}
