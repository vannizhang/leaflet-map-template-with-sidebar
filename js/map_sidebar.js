var map = L.map('map', {zoomControl:true}).setView([39.7392, -94.9847], 4);

L.tileLayer.provider('Esri.OceanBasemap').addTo(map);