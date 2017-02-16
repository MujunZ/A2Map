var locations = [{
    title: 'Godaiko Japanese Restaurant',
    location: {
        lat: 42.2409745,
        lng: -83.7698831
    },
    tag: 'Japanese',
    visibility: true,
    content: 'Next to Tsai, which\'s a good Asain store.'
}, {
    title: 'Pita Pita',
    location: {
        lat: 42.248919,
        lng: -83.654703
    },
    tag: 'Mediterranean',
    visibility: true,
    content: 'Adam\'s faverate restaruant.'
}, {
    title: 'Chia Shiang',
    location: {
        lat: 42.2571668,
        lng: -83.7299455
    },
    tag: 'Chinese',
    visibility: true,
    content: 'Blacklist'
}, {
    title: 'Paesano Restaurant & Wine Bar',
    location: {
        lat: 42.2569355,
        lng: -83.6934129
    },
    tag: 'Italian',
    visibility: true,
    content: 'Italian food.'
}, {
    title: 'Lai Lai',
    location: {
        lat: 42.230086,
        lng: -83.680978
    },
    tag: 'Chinese',
    visibility: true,
    content: 'Best beef pot'
}, {
    title: 'Asian Legend',
    location: {
        lat: 42.2776989,
        lng: -83.744642
    },
    tag: 'Chinese',
    visibility: true,
    content: 'Good Chinese Taiwan Style Restaurant.'
}, {
    title: 'Evergreen Restaurant',
    location: {
        lat: 42.3037501,
        lng: -83.7080653
    },
    tag: 'Chinese',
    visibility: true,
    content: 'Good Chinese restaurant near north campus.'
}, {
    title: 'Ypbor Yan',
    location: {
        lat: 42.250725,
        lng: -83.6644356
    },
    tag: 'Chinese',
    visibility: true,
    content: 'Good Chinese Sichuan style restaurant.'
}];

var DeStijl = [{
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#0F0919"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#E4F7F7"
    }]
}, {
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#002FA7"
    }]
}, {
    "featureType": "poi.attraction",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#E60003"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#FBFCF4"
    }]
}, {
    "featureType": "poi.business",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#FFED00"
    }]
}, {
    "featureType": "poi.government",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#D41C1D"
    }]
}, {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#BF0000"
    }]
}, {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [{
        "saturation": -100
    }]
}];

var Neon = [{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [{
        "saturation": "0"
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#eeeeee"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "saturation": "0"
    }, {
        "lightness": "-85"
    }, {
        "gamma": "1.00"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
        "invert_lightness": true
    }, {
        "hue": "#e1ff00"
    }, {
        "saturation": "0"
    }, {
        "lightness": "20"
    }, {
        "gamma": "1.00"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2d3333"
    }, {
        "saturation": "0"
    }, {
        "lightness": "0"
    }]
}, {
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "lightness": "0"
    }, {
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
        "saturation": "0"
    }, {
        "color": "#71d8d8"
    }]
}, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
        "color": "#ef2ba4"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#e1ff00"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "transit",
    "elementType": "labels.text",
    "stylers": [{
        "saturation": "0"
    }]
}, {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#e1ff00"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#ca1a85"
    }, {
        "saturation": "0"
    }]
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}];

/*
 *@Description set value to Location
 *@constructor
 */
var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);
    this.tag = ko.observable(data.tag);
    this.isVisible = ko.observable(true);
    this.marker = ko.observable(data.marker);
    this.tipText = ko.observable('<span class="tooltiptext">Dubble click to hide the pin.</span>');
};
