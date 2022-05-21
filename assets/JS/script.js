var city= "";
var dateEl = document.getElementById ('date');
var currentweather  = document.getElementById ('currentweather');
var searchBtn = document.getElementById ('searchBtn');
var citySearch = document.getElementById ('citysearch');
var icon = document.querySelector (".icon")

var currentDate = moment().format("MM/DD/YYY");
var recentSearch = [];


var apiKey = '61a0b954659200b06ebed8d8c24ace13';

function displayWeather(event) {
  event.preventDefault();
if(citySearch.val().trim()!==""){
  city=citySearchval().trim();
  currentweather(city);
};

function currentweather(lat,lon) {
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q" + city + "APPID=" + apiKey;
  fetch(requestUrl)
  .then(function (response) {
    if(response.ok) {
      return response.json();
    } else {
      return;
  }
})
.then(function (data) {
  if (!data) {
      alert("error");
  } else {
      console.log(data);
      getWeather(data);
      $(".weathercard").show();
      renderFiveDay(data);
      $("#fivedatyforcastheader").show();
  }
})
}

  function getWeather(weatherJSON) {
    
    $("#curentweather").text($('#citylist').val() + "" + moment().format("(MM/DD/YY)"));
    $("#currentweather").append(
      `<span id="icon"><img id="currentwicon" src="" alt=""></span>`
    )
      let iconurl ="http://openweathermap.org/img/w/" + weatherJSON.current.weather[0].icon + ".png";
    $('currentwicon').attr('src', iconurl);
    $('currenttemp').text(weatherJSON.current.temp + tempUnit);
    $('currentwind').text(weatherJSON.current.wind_speed + windSpeed);
    $('currenthumidity').text(weatherJSON.current.humidity + "%");
    $('currentUV').text(weatherJSON.current.UV);
    
  }

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  currentweather(lat,lon);
  let search = {
    city: $('#citylist').val(),
    latitude: lat,
    longitude: lon,
  };

  citySearch(search);
})

fetch (
  'https://api.openweathermap.org/data/2.5/onecall?lat=33.7489924&lon=-84.3902644&limit=1&appid=61a0b954659200b06ebed8d8c24ace13'
)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
});

$('#seachBtn').on("click", getWeather);
  


};



    

