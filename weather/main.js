var weather;
var temperature;

// $(document).ready(function() { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude

      $.ajax({
        url: "https://fcc-weather-api.glitch.me/api/current",
        dataType: 'jsonp',
        data: {
          lat: latitude,
          lon: longitude,
        },
        success: function(results) {
          var date = new Date();
          var n = date.toDateString();
          var time = date.toLocaleTimeString();

          console.log(n + ' ' + time);
          var celsius = true
          weather = results['weather'][0]['description'];
          temperature = Math.round(results['main']['temp']);
          console.log(results['weather'][0]['description']);
          $('#weatherConditions').html(weather);
          $('#temperature').html(temperature + " °C");
          $('#city').html('Weather in ' + results.name + " on " + n + ", " + time);
          $('#weatherImage').attr("src", results["weather"][0]["icon"]);
          $('.fahr').click(function() {
            if(celsius == true) {
            temperature = Math.round((temperature*1.8)+32);
            $('#temperature').html(temperature + " °F");
            celsius = false
            }
          });
          $('.cel').click(function() {
            if(celsius == false) {
            temperature = Math.round((temperature-32)/1.8);
            $('#temperature').html(temperature + " °C");
            celsius = true
            }
          });
        }
      })

    });
  }


