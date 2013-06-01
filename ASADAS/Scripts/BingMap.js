

      var map = null;
var noPins = true;

function LoadMap() {
    // Initialize the map
    map = new Microsoft.Maps.Map(document.getElementById("myMap"),
                 { credentials: "AjcOtl_moqFDt9N57pe6Y5EMsGOgX4w7zJL_vAzFzegVWVX-dbst-5FEHyqYFwOr" });

    // Add a handler for the map click event.
    Microsoft.Maps.Events.addHandler(map, 'click', addPin);

    // Add a handler to function that will grey out 
    //    other pins in the collection when a new one is added
    Microsoft.Maps.Events.addHandler(map.entities, 'entityadded', shadePins);


}

function UnloadMap() {
    if (myMap != null) {
        myMap.Dispose();
    }
}

function addPin(e) {
    if (e.targetType == "map") {
        var point = new Microsoft.Maps.Point(e.getX(), e.getY());
        var loc = e.target.tryPixelToLocation(point);
        var pin = new Microsoft.Maps.Pushpin(loc);
        document.getElementById("textBox").value= loc.latitude + ", " + loc.longitude;
        map.entities.push(pin);
    }
}


function shadePins(e) {

    if (noPins) {

        // If there aren't yet any pins on the map, do not grey the pin out.   
        noPins = false;

    }
    else {
        var pin = null;

        // Loop through the collection of pushpins on the map and grey out 
        //    all but the last one added (which is at the end of the array). 
        var i = 0;
        for (i = 0; i < e.collection.getLength() - 1; i++) {
            pin = e.collection.get(i);
            pin.setOptions({ icon: "GreyPin.png" });
        }
    }
}