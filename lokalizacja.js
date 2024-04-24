document.getElementById('locate-button').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.write(longitude, latitude)
            var mapContainer = document.getElementById('map-container');
            var mapImage = document.getElementById('map');
            var marker = document.createElement('img');
            if(longitude>22.544440 && longitude<22.553962 && latitude>51.232131 && latitude<51.238316) {
            marker.src = 'lokalizacja.png'
            marker.classList.add('marker');
            marker.style.position = 'absolute';
            marker.style.left = 500 + 'px';
            //(longitude) * mapImage.width + 'px';
            marker.style.top = 500 + 'px';
            //(latitude) * mapImage.height + 'px';
            mapContainer.appendChild(marker);
            }
        }, function(error) {
            console.error('Błąd Geolocation: ' + error.message);
        });
    } else {
        alert('Twoja przeglądarka nie obsługuje Geolocation.');
    }
});