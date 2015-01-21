/* globals google, onDomReady */

(function() {

  var coordinates  = new google.maps.LatLng(41.8690859,-87.6261165);
  var markerCoords = new google.maps.LatLng(41.8690859,-87.6261165);

  var opts = {
    zoom: 16,
    center: coordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: window.MapStyles,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    panControl: false,
    zoomControlOptions: {style: 'SMALL'}
  };

  onDomReady(function initMap () {
    var map = new google.maps.Map(document.getElementById('map'), opts);

    var marker = new google.maps.Marker({
      position: markerCoords,
      animation: google.maps.Animation.DROP
    });
    marker.setMap(map);

    var infoWindow = new google.maps.InfoWindow({
      content: "<h3>Justice Film Festival</h3><strong>Film Row Cinema at Columbia College</strong><br>1104 S. Wabash Ave<br>Chicago IL 60605"
    });
    infoWindow.open(map, marker);
  });

})();
