/* globals google, onDomReady */

(function() {

  var coordinates  = new google.maps.LatLng(34.052286, -118.24568699999998);
  var markerCoords = new google.maps.LatLng(34.050286, -118.24568699999998);

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
      content: "<h3>Justice Film Festival</h3><strong>Downtown Independent</strong><br>251 S. Main Street<br>Los Angeles, CA 90012"
    });
    infoWindow.open(map, marker);
  });

})();
