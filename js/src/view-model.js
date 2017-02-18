var ViewModel = function() {
    //Always use self=this in KO ViewModel to avoid further complexity
    var self = this;
    var largeInfowindow = new google.maps.InfoWindow();

    /*
     * @description make markers
     */
    var defaultIcon = makeMarkerIcon('FF0080');
    var highlightedIcon = makeMarkerIcon('FFED00');
    var minionIcon = "http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png";

    /*
     * @Description set value to Location
     * @constructor
     */
    var Location = function(data) {
        var that = this;
        this.title = ko.observable(data.title);
        this.position = data.location;
        this.location = ko.observable(data.location);
        this.tag = ko.observable(data.tag);
        this.isVisible = ko.observable(true);
        this.marker = data.marker;
        this.clickCount = 0;
        this.createMarkerWindow = function() {
            var contact = this.contact;
            var menu = this.menu;
            var $markerWindowTemplate = '<div class="markerWindow" id="markerWindow{{id}}"><h1 class="locationTitle">{{locationTitle}}</h1><p><a href="{{menu}}">menu</a></p><p class="locationPhone">Phone: {{locationPhone}}</p><p class="locationContent">MJ\'s Note: {{locationContent}}</p></div>';
            this.windowContent = $markerWindowTemplate.replace(/{{id}}/g, this.marker.id).replace(/{{locationTitle}}/g, this.marker.title).replace(/{{locationPhone}}/g, contact).replace(/{{menu}}/g, menu).replace(/{{locationContent}}/g, this.marker.content);
            return this.windowContent;
        };
        this.populateInfoWindow = function(infowindow, data) {
            this.getApi(data, infowindow);
        };
        this.marker.addListener('click', function() {
            that.populateInfoWindow(largeInfowindow, that);
            this.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                this.setAnimation(null);
            }.bind(this), 750);
        });
        this.marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        this.marker.addListener('mouseout', function() {
            this.setIcon(minionIcon);
        });
        this.setMarker = function() {
            this.marker.setMap(map);
            self.selectedTag('empty');
        };
        this.removeMarker = function() {
            this.marker.setMap(null);
            self.selectedTag('empty');
        };
        this.showMarker = function() {
            this.setMarker();
            this.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                this.marker.setAnimation(null);
            }.bind(this), 750);
            that.populateInfoWindow(largeInfowindow, that);
        };
        this.tipText = ko.observable('<span class="tooltiptext">Dubble click to hide the pin.</span>');
        this.getApi = function(data, infowindow) {
            fourSquareInfo(data, infowindow);
        };
    };

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

    //make location list
    self.locationList = ko.observableArray([]);
    locations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    //reastaurant tag drop down list items
    self.restaurantTag = ko.observableArray([]);
    (function createRestaurantTag() {
        index = {};
        for (var i = 0, length1 = locations.length; i < length1; i++) {
            var tag = locations[i].tag;
            if (!index[tag]) {
                index[tag] = true;
                self.restaurantTag.push(tag);
            }
        }
    }());
    self.restaurantTag().sort();

    self.selectedTag = ko.observable('');

    //match items with the tag catagories
    self.matchTag = ko.computed(function() {
        if (self.selectedTag() != 'empty') {
            for (var i = 0, length1 = self.locationList().length; i < length1; i++) {
                var match = self.locationList()[i].tag().indexOf(self.selectedTag()) != -1;
                if (!match) {
                    self.locationList()[i].isVisible(false);
                    locations[i].visibility = false;
                    locations[i].marker.setMap(null);
                } else {
                    self.locationList()[i].isVisible(true);
                    locations[i].visibility = true;
                    locations[i].marker.setMap(map);
                }
            }
        }
    }, this);

    //input text
    self.searchText = ko.observable('');

    //match items
    self.search = ko.computed(function() {
        for (var i = 0, length1 = self.locationList().length; i < length1; i++) {
            var match = self.locationList()[i].title().toLowerCase().indexOf(self.searchText().toLowerCase()) != -1;
            if (!match) {
                self.locationList()[i].isVisible(false);
                locations[i].visibility = false;
                locations[i].marker.setMap(null);
            } else {
                self.locationList()[i].isVisible(true);
                locations[i].visibility = true;
                locations[i].marker.setMap(map);
            }
        }
    }, this);
};
