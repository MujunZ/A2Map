function initMap(){function a(a){var b={url:"http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+a+"|40|_|%E2%80%A2",size:new google.maps.Size(21,34),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(10,34),scaledSize:new google.maps.Size(21,34)};return b}function b(){for(var a=new google.maps.LatLngBounds,b=0,c=markers.length;b<c;b++)markers[b].setMap(map),a.extend(markers[b].position);map.fitBounds(a)}function c(){for(var a=0,b=markers.length;a<b;a++)markers[a].setMap(null)}var d=new google.maps.StyledMapType(DeStijl,{name:"DeStijl"}),e=new google.maps.StyledMapType(Neon,{name:"Neon"});map=new google.maps.Map(document.getElementById("map"),{center:{lat:42.25,lng:-83.698},mapTypeControlOptions:{mapTypeIds:["roadmap","satellite","hybrid","terrain","DeStijl","Neon"]},zoom:12}),map.mapTypes.set("DeStijl",d),map.mapTypes.set("Neon",e),map.setMapTypeId("DeStijl");for(var f=new google.maps.InfoWindow,g=(a("FF0080"),a("FFED00")),h="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/48/Minion-Hello-icon.png",i=function(a){o.addListener("click",function(){populateInfoWindow(this,f,locations,a),this.setAnimation(google.maps.Animation.BOUNCE),self=this,setTimeout(function(){self.setAnimation(null)},750)}),o.addListener("mouseover",function(){this.setIcon(g)}),o.addListener("mouseout",function(){this.setIcon(h)})},j=0;j<locations.length;j++){var k=locations[j].location,l=locations[j].title,m=locations[j].content,n=(locations[j].yelpPhone,locations[j].yelpImg,locations[j].visibility);locations[j].marker=new google.maps.Marker({position:k,title:l,icon:h,content:m,visible:n,animation:google.maps.Animation.DROP,id:j});var o=locations[j].marker;markers.push(o),i(j)}$("select").change(function(){$("select").change(updateMarker())}),b();for(var p=document.getElementsByClassName("locationBox"),j=0,q=p.length;j<q;j++)p[j].addEventListener("click",function(a){return function(){markers[a].setMap(map)}}(j)),p[j].addEventListener("dblclick",function(a){return function(){markers[a].setMap(null)}}(j));document.getElementById("searchbox").addEventListener("focus",c),mapLoaded=!0}function updateMarker(){for(var a=0,b=locations.length;a<b;a++)locations[a].visibility===!0?locations[a].marker.setMap(map):locations[a].marker.setMap(null),console.log("updated!")}function createMarkerWindow(a,b){var c=locations[b].yelpPhone,d=locations[b].yelpImg,e=$('script[data-template="markerWindowTemp"]').html();return windowContent=e.replace(/{{id}}/g,a.id).replace(/{{locationTitle}}/g,a.title).replace(/{{locationPhone}}/g,c).replace(/{{locationImg}}/g,d).replace(/{{locationContent}}/g,a.content)}function populateInfoWindow(a,b,c,d){createMarkerWindow(a,d),b.marker!=a&&(b.marker=a,b.setContent(windowContent),b.open(map,a),b.addListener("closeclick",function(){b.marker=null}))}var map,markers=[],windowContent,mapLoaded=!1;setTimeout(function(){mapLoaded===!1&&alert("Google map didn't load. Are you sure you are connected to the Internet and not in China?")},1e3);