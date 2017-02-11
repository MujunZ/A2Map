var ViewModel = function () {
   //Always use self=this in KO ViewModel to avoid further complexity
	var self = this;
   

	//make location list
	self.locationList = ko.observableArray([]);
	locations.forEach( function(locationItem) {
		self.locationList.push(new Location(locationItem));
	});

   //input text
   self.searchText = ko.observable('');

   //match items
   self.search = ko.computed(function () {
      for(var i = 0, length1 = self.locationList().length; i < length1; i++){
         var match =  self.locationList()[i].title().toLowerCase().indexOf(self.searchText().toLowerCase()) != -1;
         if (!match) {
            self.locationList()[i].isVisible(false);
         }else {
            self.locationList()[i].isVisible(true);
         };
      };
   },this);

};

ko.applyBindings(new ViewModel());