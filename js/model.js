var locations = [{
               title:'Godaiko Japanese Restaurant',
               location:{
                  lat:42.2409745,
                  lng:-83.7698831
               },
               yelp_id: 'godaiko-japanese-restaurant-ann-arbor',
               content:'First Dinner!'
            },
            {
               title:'Pita Pita',
               location:{
                  lat:42.248919,
                  lng:-83.654703
               },
               yelp_id: 'pita-pita-ypsilanti-3',
               content:'Faverate Restaruant'
            },
            {
               title:'Chia Shiang',
               location:{
                  lat:42.2571668,
                  lng:-83.7299455
               },
               yelp_id: 'chia-shiang-restaurant-ann-arbor-2',
               content:'Blacklist'
            }
      	];

var DeStijl = [
         {
            "elementType":"labels",
            "stylers":[
               {
                  "visibility":"off"
               }
            ]
         },
         {
            "featureType":"road",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#0F0919"
               }
            ]
         },
         {
            "featureType":"water",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#E4F7F7"
               }
            ]
         },
         {
            "elementType":"geometry.stroke",
            "stylers":[
               {
                  "visibility":"off"
               }
            ]
         },
         {
            "featureType":"poi.park",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#002FA7"
               }
            ]
         },
         {
            "featureType":"poi.attraction",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#E60003"
               }
            ]
         },
         {
            "featureType":"landscape",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#FBFCF4"
               }
            ]
         },
         {
            "featureType":"poi.business",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#FFED00"
               }
            ]
         },
         {
            "featureType":"poi.government",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#D41C1D"
               }
            ]
         },
         {
            "featureType":"poi.school",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "color":"#BF0000"
               }
            ]
         },
         {
            "featureType":"transit.line",
            "elementType":"geometry.fill",
            "stylers":[
               {
                  "saturation":-100
               }
            ]
         }
      ];

    var Neon = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"0"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#eeeeee"},{"saturation":"0"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":"0"},{"lightness":"-85"},{"gamma":"1.00"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"invert_lightness":true},{"hue":"#e1ff00"},{"saturation":"0"},{"lightness":"20"},{"gamma":"1.00"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2d3333"},{"saturation":"0"},{"lightness":"0"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"lightness":"0"},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"saturation":"0"},{"color":"#71d8d8"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ef2ba4"},{"saturation":"0"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#e1ff00"},{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#e1ff00"},{"saturation":"0"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#ca1a85"},{"saturation":"0"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];

//@constructor
var Location = function (data) {
	this.title = ko.observable(data.title);
   this.location = ko.observable(data.location);
   //this.match = ko.observable(-1);
   this.isVisible = ko.observable(true);
};   	