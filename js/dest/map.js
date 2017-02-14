function initMap(){function a(a){var b={url:"http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+a+"|40|_|%E2%80%A2",size:new google.maps.Size(21,34),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(10,34),scaledSize:new google.maps.Size(21,34)};return b}function b(){for(var a=new google.maps.LatLngBounds,b=0,c=markers.length;b<c;b++)markers[b].setMap(map),a.extend(markers[b].position);map.fitBounds(a)}var c=new google.maps.StyledMapType(DeStijl,{name:"DeStijl"}),d=new google.maps.StyledMapType(Neon,{name:"Neon"});map=new google.maps.Map(document.getElementById("map"),{center:{lat:42.25,lng:-83.698},mapTypeControlOptions:{mapTypeIds:["roadmap","satellite","hybrid","terrain","DeStijl","Neon"]},zoom:12}),map.mapTypes.set("DeStijl",c),map.mapTypes.set("Neon",d),map.setMapTypeId("DeStijl");for(var e=new google.maps.InfoWindow,f=(a("FF0080"),a("FFED00")),g="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png",h=function(a){n.addListener("click",function(){populateInfoWindow(this,e,locations,a),this.setAnimation(google.maps.Animation.BOUNCE),self=this,setTimeout(function(){self.setAnimation(null)},750)}),n.addListener("mouseover",function(){this.setIcon(f)}),n.addListener("mouseout",function(){this.setIcon(g)})},i=0;i<locations.length;i++){var j=locations[i].location,k=locations[i].title,l=locations[i].content,m=(locations[i].yelpPhone,locations[i].yelpImg,locations[i].visibility);locations[i].marker=new google.maps.Marker({position:j,title:k,icon:g,content:l,visible:m,animation:google.maps.Animation.DROP,id:i});var n=locations[i].marker;markers.push(n),h(i)}$("select").change(function(){$("select").change(updateMarker())}),$("input").keyup(function(){$("input").keyup(updateMarker())}),b();for(var o=document.getElementsByClassName("locationBox"),i=0,p=o.length;i<p;i++)o[i].addEventListener("click",function(a){return function(){markers[a].setMap(map)}}(i)),o[i].addEventListener("dblclick",function(a){return function(){markers[a].setMap(null)}}(i));mapLoaded=!0}function updateMarker(){for(var a=0,b=locations.length;a<b;a++)locations[a].visibility===!0?locations[a].marker.setMap(map):locations[a].marker.setMap(null)}function createMarkerWindow(a,b){var c=locations[b].yelpPhone,d=locations[b].yelpImg,e=$('script[data-template="markerWindowTemp"]').html();return windowContent=e.replace(/{{id}}/g,a.id).replace(/{{locationTitle}}/g,a.title).replace(/{{locationPhone}}/g,c).replace(/{{locationImg}}/g,d).replace(/{{locationContent}}/g,a.content)}function populateInfoWindow(a,b,c,d){createMarkerWindow(a,d),b.marker!=a&&(b.marker=a,b.setContent(windowContent),b.open(map,a),b.addListener("closeclick",function(){b.marker=null}))}var map,markers=[],windowContent,mapLoaded=!1;setTimeout(function(){mapLoaded===!1&&alert("Google map didn't load. Are you sure you are connected to the Internet and not in China?")},1e3);