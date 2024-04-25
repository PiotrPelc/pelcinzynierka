document.getElementById('locate-button').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var mapContainer = document.getElementById('map-container');
            var mapImage = document.getElementById('map');
            var marker = document.createElement('img');
            if(longitude>22.544977 && longitude<22.553737 && latitude>51.232881 && latitude<51.237633) {
            marker.src = 'lokalizacja.png'
            marker.classList.add('marker');
            marker.style.position = 'absolute';
            marker.style.left = (longitude-22.544977) * mapImage.width * 114 + 'px';
            marker.style.top = (latitude-51.232881) * mapImage.height * 210 + 'px';
            mapContainer.appendChild(marker);
            }
        }, function(error) {
            console.error('Błąd Geolocation: ' + error.message);
        });
    } else {
        alert('Twoja przeglądarka nie obsługuje Geolocation.');
    }
});
