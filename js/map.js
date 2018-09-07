function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 47.654955,
            lng: -2.706508
          },
        zoom: 15
    });
    marker = new google.maps.Marker({
        position: map.center,
        map: map,
    });

    marker.setAnimation(google.maps.Animation.BOUNCE); //Animation des marqueurs


}