function initMap() {
  var map = new google.maps.Map(document.getElementById('maCarteGeolocalisation'),
        {
          center: {
            lat: -34.397,
            lng: 150.644,
          },
          zoom: 8,
        });

  // Try HTML5 geolocation.

  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            //indique où la carte apparait centrée

            map.setCenter(pos);

            // crée un marqueur sur la carte
            var marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              position: pos,
              title: 'Vous êtes ici !',
            });
            marker.addListener('click', toggleBounce);

          },

           function () {
            handleLocationError(true, infoWindow, map.getCenter());
          });
  } else {

    // Browser doesn't support Geolocation

    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
}
