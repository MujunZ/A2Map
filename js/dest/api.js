function fourSquareInfo(a,b){var c="EQZYLLLIO3W12LHM1IF0FETRZM5DF0QSNKCMFSUHP0S1QA3P",d="ZBJ0X0JGO5DQBJEUXGBLZ4ARTZD11QLQKZJTVGOANSW10MGK",e=a.marker.title,f=a.position.lat,g=a.position.lng,h="https://api.foursquare.com/v2/venues/search?ll="+f+","+g+"&client_id="+c+"&client_secret="+d+"&v=20170215&query="+e+"&limit=1";$.ajax({url:h,dataType:"jsonp"}).done(function(c){var d=c.response.venues[0];null!==d.contact.formattedPhone?a.contact=d.contact.formattedPhone:a.contact="No data from Foursqueare",null!==d.menu?a.menu=d.menu.mobileUrl:a.menu="https://foursquare.com/",a.createMarkerWindow(),b.marker!=a.marker&&(b.marker=a.marker,b.setContent(a.windowContent),b.open(map,a.marker),b.addListener("closeclick",function(){b.marker=null}))}).fail(function(){a.contact="Can't get data from Foursqueare",a.createMarkerWindow(),b.marker!=a.marker&&(b.marker=a.marker,b.setContent(a.windowContent),b.open(map,a.marker),b.addListener("closeclick",function(){b.marker=null}))})}