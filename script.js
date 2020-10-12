var cityH1 = $("#theCityName");


function cityName(){
    $( "#searchBtn" ).click(function( event ) {
    event.preventDefault();
    console.log("hey");
    var theCity = $("#cityInput").val();
    console.log(theCity); 
    cityH1.text(theCity);
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&units=imperial&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function(response){
     console.log(response);        
   })
    });

  
  }
  
  cityName();



