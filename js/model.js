var locations = [{
               title:'Godaiko Japanese Restaurant',
               location:{
                  lat:42.2409745,
                  lng:-83.7698831
               },
               content:'First Dinner!'
            },
            {
               title:'Pita Pita',
               location:{
                  lat:42.248919,
                  lng:-83.654703
               },
               content:'Faverate Restaruant'
            },
            {
               title:'Chia Shiang',
               location:{
                  lat:42.2571668,
                  lng:-83.7299455
               },
               content:'Blacklist'
            }
      	];

//@constructor
var Location = function (data) {
	this.title = ko.observable(data.title);
   this.location = ko.observable(data.location);
   //this.match = ko.observable(-1);
   this.isVisible = ko.observable(true);
};   	