var dateEl = document.getElementById ('date')
var currentweather  = document.getElementById ('currentweather')
var SearchBtn = document.getElementById ('SearchBtn')
var citysearch = document.getElementById ('citysearch')
var recentSearch = [];
var cityTemp = $('#temperature');
var cityHumidity = $('#humidity');
var cityWind = $('#wind');
var apiKey = '61a0b954659200b06ebed8d8c24ace13';

function getWeather() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
   
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });


