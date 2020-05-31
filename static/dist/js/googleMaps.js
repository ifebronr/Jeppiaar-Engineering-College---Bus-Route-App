// API Key : AIzaSyDxuwyme5mHP2g1whyiB60uGruwbUoLtTA
    // API Key : AIzaSyB5g-FlXI9mvWfrxrA056JR2ebLzC-DMjE
    
    function initMap(){
        // Map options
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
  
        var options = {
          zoom:10,
          center:{lat:12.8664,lng:80.2194}
        }
  
        // New map
        var map = new google.maps.Map(document.getElementById('map'), options);
  
  
        directionsDisplay.setMap(map);
  
        directionsService.route({
            origin: {lat:12.8664,lng:80.2194},
            destination: {lat:12.681185,lng:  79.990702},
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        /* {{ route }} 
            var route = {{route.test}}
        */
        
       
          // add Marker Func 
          jprCollege = {lat:12.8664,lng:80.2194}
          stop_1 = {lat:12.8601,lng:80.2272};
          stop_2 = {lat:12.8459,lng:80.2265};
          stop_3 = {lat:12.8077,lng:80.2258};
          stop_4 = {lat:12.7897,lng:80.2216};
          stop_5 = {lat:12.7711,lng:80.2135};
          stop_6 = {lat:12.7304,lng:80.1890};
          stop_7 = {lat:12.7160,lng:80.1589};
          stop_8 = {lat:12.710423,lng: 80.106864};
          stop_9 = {lat:12.694901,lng: 80.036722};
          stop_10 = {lat:12.681185,lng:  79.990702};


          /*  */ 
         
          noOfStudents = 25;
          function addMarker(coords,info){
            var marker = new google.maps.Marker({
            position:coords,
            map:map,
  
        });
        var infoWindow = new google.maps.InfoWindow({
          content:'<p>asdfasdfasdfasdfasdf '+ info +  'asdfasdfasdfasdfsdaf</p>'
        });
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
  
        }
        addMarker(jprCollege,"College");
        addMarker(stop_1,5);
        addMarker(stop_2,2);
        addMarker(stop_3,6);
        addMarker(stop_4,5);
        addMarker(stop_5,2);
        addMarker(stop_6,2);
        addMarker(stop_7,1);
        addMarker(stop_8,5);
        addMarker(stop_9,7);
        addMarker(stop_10,10);
      }
         /*
        // Add marker
        var marker = new google.maps.Marker({
          position:{lat:12.8664,lng:80.2194},
          map:map,
  
        });
  
        var infoWindow = new google.maps.InfoWindow({
          content:'<p> Jeppiaar Engineering College </p>'
        });
  
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
  
        // Add Marker Function
        addMarker({lat:12.7897,lng:80.2216})
        addMarker({lat:12.8459,lng:80.2265})
        function addMarker(coords){
          var marker = new google.maps.Marker({
            position:coords,
            map:map,
          });     
          }*//*
          function initMap() {
          var directionsService = new google.maps.DirectionsService;
          var directionsDisplay = new google.maps.DirectionsRenderer;
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: 41.85, lng: -87.65}
          });
          directionsDisplay.setMap(map);
  
          var onChangeHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
          };
          document.getElementById('start').addEventListener('change', onChangeHandler);
          document.getElementById('end').addEventListener('change', onChangeHandler);
        }
  
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          directionsService.route({
            origin: document.getElementById('start').value,
            destination: document.getElementById('end').value,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }*/
  
      