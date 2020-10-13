// city temp properties:
var cityH1 = $("#theCityName");
var tempEL = $("#temp");
var humEL = $("#hum");
var windEL = $("#wind");
var uvEl = $("#uvi");

// 5 day forecast variables
var tempDayOne = $("#tempDayOne");
var tempDayTwo = $("#tempDayTwo")
var tempDayThree = $("#tempDayThree")
var tempDayFour = $("#tempDayFour")
var tempDayFive = $("#tempDayFive")
var humDayOne = $("#humDayOne");
var humDayTwo = $("#humDayTwo");
var humDayThree = $("#humDayThree");
var humDayFour = $("#humDayFour");
var humDayFive = $("#humDayFive"); 
var dateOne = $("#dateOne");
var dateTwo = $("#dateTwo");
var dateThree = $("#dateThree");
var dateFour = $("#dateFour");
var dateFive = $("#dateFive");
var logoOne = $("#logoOne")
var logoTwo = $("#logoTwo")
var logoThree = $("#logoThree")
var logoFour = $("#logoFour")
var logoFive = $("#logoFive")
// const ul = document.querySelector("ul")
// const form = document.querySelector("form")
// const input = document.getElementById("cityInput")

// let citiesArray = localStorage.getItem("cities")
//   ? JSON.parse(localStorage.getItem("cities"))
//   : []

//     localStorage.setItem("cities", JSON.stringify(citiesArray))
//     const data = JSON.parse(localStorage.getItem("cities"))

//     const liMaker = (text) => {
//         const li = document.createElement("li")
//         li.textContent = text
//         ul.appendChild(li)
//     }

//     form.addEventListener("submit", function(){
//         citiesArray.push(input.value)
//         localStorage.setItem("cities", JSON.stringify(citiesArray))
//         liMaker(input.value)
//         input.value = ""
//     })

//     data.forEach((item) => {
//         liMaker(item)
//     })

    




function cityName(
){
    $( "#searchBtn" ).click(function( event ) {
    event.preventDefault();
    var theCity = $("#cityInput").val();
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&units=imperial&appid=" + APIKey;
    

    $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function(response){
     console.log(response);
     cityH1.text(theCity);
     tempEL.text("Temperature: "+ (response.main.temp) + " ºF");        
     humEL.text("Humidity: "+ (response.main.humidity) + " %");
     windEL.text("Wind Speed: " + (response.wind.speed) + " MPH");
     var lat = (response.coord.lat);
     var lon = (response.coord.lon);
     
     

     var queryURLTwo = "http://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
     $.ajax({
         url: queryURLTwo,
         method: "GET"
     }).then(function(response){
         uvEl.text("UV Index: " + (response.value));

     })


     var queryURLThree = "http://api.openweathermap.org/data/2.5/forecast?q=" + theCity + "&units=imperial&appid=" + APIKey;
     $.ajax({
         url: queryURLThree,
         method: "GET"
     }).then(function(response){
         console.log(response);
        tempDayOne.text("Temp: " + (response.list[6].main.temp) + " ºF");
        tempDayTwo.text("Temp: " + (response.list[14].main.temp) + " ºF");
        tempDayThree.text("Temp: " + (response.list[22].main.temp) + " ºF");
        tempDayFour.text("Temp: " + (response.list[30].main.temp) + " ºF");
        tempDayFive.text("Temp: " + (response.list[38].main.temp) + " ºF");
        humDayOne.text("Humidity: " + (response.list[6].main.humidity) + "%")
        humDayTwo.text("Humidity: " + (response.list[14].main.humidity) + "%")
        humDayThree.text("Humidity: " + (response.list[22].main.humidity) + "%")
        humDayFour.text("Humidity: " + (response.list[30].main.humidity) + "%")
        humDayFive.text("Humidity: " + (response.list[38].main.humidity) + "%")
        dateOne.text(response.list[6].dt_txt)
        dateTwo.text(response.list[14].dt_txt)
        dateThree.text(response.list[22].dt_txt)
        dateFour.text(response.list[30].dt_txt)
        dateFive.text(response.list[38].dt_txt)
        var icon = (response.list[10].weather[0].icon)
        var iconTwo = (response.list[18].weather[0].icon)
        var iconThree = (response.list[26].weather[0].icon)
        var iconFour = (response.list[34].weather[0].icon)
        var iconFive = (response.list[36].weather[0].icon)
        $("#logoOne").prepend($("<img>",{id:"theImg",src:"http://openweathermap.org/img/wn/" + icon + "@2x.png"}))
        $("#logoTwo").prepend($("<img>",{id:"theImg",src:"http://openweathermap.org/img/wn/" + iconTwo + "@2x.png"}))
        $("#logoThree").prepend($("<img>",{id:"theImg",src:"http://openweathermap.org/img/wn/" + iconThree + "@2x.png"}))
        $("#logoFour").prepend($("<img>",{id:"theImg",src:"http://openweathermap.org/img/wn/" + iconFour + "@2x.png"}))
        $("#logoFive").prepend($("<img>",{id:"theImg",src:"http://openweathermap.org/img/wn/" + iconFive + "@2x.png"}))

     })

    })
   });
  
  }
  
  cityName();



