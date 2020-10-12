// city temp properties:
var cityH1 = $("#theCityName");
var tempEL = $("#temp");
var humEL = $("#hum");
var windEL = $("#wind");
var uvEl = $("#uvi");


function cityName(){
    $( "#searchBtn" ).click(function( event ) {
    event.preventDefault();
    var theCity = $("#cityInput").val();
    cityH1.text(theCity);
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&units=imperial&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function(response){
     console.log(response);
     tempEL.text("Temperature: "+ (response.main.temp) + " ºF");        
     humEL.text("Humidity: "+ (response.main.humidity) + " %");
     windEL.text("Wind Speed: " + (response.wind.speed) + " MPH");
    //  uvEl.text("UV Index: " + (response.))
     var lat = (response.coord.lat);
     console.log(lat);
   })




    });

  
  }
  
  cityName();



