var ViewModel = function() {
    //Always use self=this in KO ViewModel to avoid further complexity
    var self = this;


    //make location list
    self.locationList = ko.observableArray([]);
    locations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

   //reastaurant tag drop down list items
   self.restaurantTag = ko.observableArray([]);
   (function createRestaurantTag () {
      index = {};
      for(var i = 0, length1 = locations.length; i < length1; i++){
            var tag = locations[i].tag;
            if (!index[tag]) {
               index[tag] = true;
               self.restaurantTag.push(tag);
            };
      };
   }());
   self.restaurantTag().sort();

   self.selectedTag = ko.observable('');

   //match items with the tag
   self.matchTag = ko.computed(function () {
      for (var i = 0, length1 = self.locationList().length; i < length1; i++) {
            var match = self.locationList()[i].tag().indexOf(self.selectedTag()) != -1;
            if (!match) {
                self.locationList()[i].isVisible(false);
            } else {
                self.locationList()[i].isVisible(true);
            };
        };
   }, this);

    //input text
    self.searchText = ko.observable('');

    //match items
    self.search = ko.computed(function() {
        for (var i = 0, length1 = self.locationList().length; i < length1; i++) {
            var match = self.locationList()[i].title().toLowerCase().indexOf(self.searchText().toLowerCase()) != -1;
            if (!match) {
                self.locationList()[i].isVisible(false);
            } else {
                self.locationList()[i].isVisible(true);
            };
        };
    }, this);
};

ko.applyBindings(new ViewModel());
