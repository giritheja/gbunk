function(
    var submit = document.getElementById("submit");
    var place = document.getElementById('place');
    submit.addEventListener("click", function setPositionToHere(place) {
    var geolocator = new Windows.Devices.Geolocation.Geolocator();

    promise = geolocator.getGeopositionAsync();
    promise.done(
        function (pos) {
            var coord = pos.coordinate;

            var settings = Windows.Storage.ApplicationData.current.localSettings;
            settings.values["Status"] = coord.timestamp;
            settings.values["latitude"] = coord.point.position.latitude;
            settings.values["longitude"] = coord.point.position.longitude;
            settings.values["accuracy"] = coord.accuracy;


            // A JavaScript background task must call close when it is done
            close();
        },
        function (err) {
            var settings = Windows.Storage.ApplicationData.current.localSettings;
            settings.values["Status"] = err.message;

            settings.values["latitude"] = "No data";
            settings.values["longitude"] = "No data";
            settings.values["accuracy"] = "No data";

            backgroundTaskInstance.succeeded = false;

            // A JavaScript background task must call close when it is done
            close();
        }
}
)();