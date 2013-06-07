var map = null;
var noPins = true;
var layertuberias = new Microsoft.Maps.EntityCollection();
var layerllaves = new Microsoft.Maps.EntityCollection();

//http://www.garzilla.net/vemaps/Layers-via-the-Entity-Collection-with-Bing-Maps-7.aspx

function LoadMap() {
    // Initialize the map
    map = new Microsoft.Maps.Map(
        document.getElementById("myMap"),  
        //mapOptions 
        {
            credentials: "AjcOtl_moqFDt9N57pe6Y5EMsGOgX4w7zJL_vAzFzegVWVX-dbst-5FEHyqYFwOr",
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            center: new Microsoft.Maps.Location(10.65672975334863, -84.76763305664062),
            zoom: 12,
            enableClickableLogo:false,
            enableSearchLogo: false,
            showCopyright: false,
            showMapTypeSelector:false
           // disableBirdseye: true
       });
   
    // Add a handler for the map click event.
    Microsoft.Maps.Events.addHandler(map, 'click', addPin);

   
  //  Microsoft.Maps.Events.addHandler(map.entities, 'entityadded', shadePins);  // Accesar los puntos anteiores
}

function UnloadMap() {
    if (myMap != null) {
        myMap.Dispose();
    }
}

//Agrega un Pin al mapa
function addPin(e) {
    if (e.targetType == "map") {
        var point = new Microsoft.Maps.Point(e.getX(), e.getY());//Devuelve la ubicacion del punto donde se encuentra el punter
        var loc = e.target.tryPixelToLocation(point);
        var pin = new Microsoft.Maps.Pushpin
            (
                loc, //localizacion del punto
                {
                    icon: '/images/water.png',
                    draggable: true,
                    textOffset: new Microsoft.Maps.Point(e.getX() + 0.000001, e.getY() + 0.000001),
                   // typeName:'pinText',
                        text: 'patito'
                }
            );
        document.getElementById("textBox").value= loc.latitude + ", " + loc.longitude; //carga el textbox con la latitud y longitud del ping actual
        Microsoft.Maps.Events.addHandler(pin, 'click', removePin); // Attach a handler to the pin so that it is removed when it is clicked
        Microsoft.Maps.Events.addHandler(pin, 'mouseover', showPinInformation);
        map.entities.push(pin);//agrega el pin

    }
}

//Elimina un Pin del mapa
function removePin(e) {
    var r = confirm("¿Desea eliminar esa ASADA?!");
    if (r == true) {
        var indexOfPinToRemove = map.entities.indexOf(e.target);
        map.entities.removeAt(indexOfPinToRemove);
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
            pin.setOptions({ icon: "/images/water.png" });
        }
    }
}

function showPinInformation(e) {
    if (e.targetType == 'pushpin') {
       // var pinLoc = e.target.getLocation();
       // alert("The location of the pushpin is now " + pinLoc.latitude + ", " + pinLoc.longitude);
        //
    }
}



function loadASADAS() {

    map.entities.clear();
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    map.entities.push(pushpin);
}

/* custom pin
http://www.bingmapsportal.com/isdk/ajaxv7#Pushpins15
map.entities.clear(); 
var pushpinOptions = {width: null, height: null, htmlContent: "<div style='font-size:12px;font-weight:bold;border:solid 2px;background-color:LightBlue;width:100px;'>Custom Pushpin</div>"}; 
var pushpin= new Microsoft.Maps.Pushpin(map.getCenter(), pushpinOptions);
map.entities.push(pushpin);*/