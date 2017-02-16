var ViewModel = function() {
  //Always use self=this in KO ViewModel to avoid further complexity
  var self = this;

  /*
   * @Description set value to Location
   * @constructor
   */
  var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);
    this.tag = ko.observable(data.tag);
    this.isVisible = ko.observable(true);
    this.marker = data.marker;
    this.clickCount = 0;
    this.setMarker = function () {
        this.marker.setMap(map);
        self.selectedTag('empty');
    }; 
    this.removeMarker = function () {
        this.marker.setMap(null);
        self.selectedTag('empty');
    };
    this.toggleMarker = function () {
      this.clickCount ++;
      if (this.clickCount % 2 != 1) {
        this.setMarker();
      } else {
        this.removeMarker();
      }
    };
    this.tipText = ko.observable('<span class="tooltiptext">Dubble click to hide the pin.</span>');
};

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
    if (self.selectedTag()!='empty') {
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