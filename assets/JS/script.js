var apiKey = '61a0b954659200b06ebed8d8c24ace13';

var city= [];
var dateEl = document.getElementById ('date');
var currentcity = document.getElementById ('currentcity');
var searchBtn = document.getElementById ('searchBtn');
var citySearch = document.getElementById ('citysearch');
var currenthumidity = document.getElementById('#humidity')
var currenttemp = document.getElementById('#temp');
var currentUV = document.getElementById('#UV')
var currentwind =document.getElementById ('#wind');
var icon = document.querySelector (".icon");

var currentDate = moment().format("MM/DD/YYY");
var recentSearch = [];




function displayWeather(event) {
  event.preventDefault();
if(citySearch.val().trim()!==""){
  city=citySearchval().trim();
  currentweather(city);
}
};

function currentweather(city) {

  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.7489924&lon=-84.3902644&limit=1&appid=61a0b954659200b06ebed8d8c24ace13";
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
      // renderForecast(data);
      $("#fivedatyforcastheader").show();
  }
})
}

function getWeather(weatherJSON) {
  var queryURL= "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + apiKey;
  $.ajax({
      url:queryURL,
      method:'GET',
  }).then(function(showWeather) {
    
    $("#curentweather").text($('#citylist').val() + "" + moment().format("(MM/DD/YY)"));
    $("#currentweather").append(
      `<span id="icon"><img id="currentwicon" src="" alt=""></span>`
    )
      let iconurl ="http://openweathermap.org/img/w/" + weatherJSON.current.weather[0].icon + ".png";
    $('currentwicon').attr('src', iconurl);
    $('currenttemp').text(weatherJSON.current.currenttemp);
    $('currentwind').text(weatherJSON.current.currentwind);
    $('currenthumidity').text(weatherJSON.current.currenthumidity);
    $('currentUV').text(weatherJSON.current.UV);
    
  });
}
  // function renderForecast(data) {
  //   $("#fivedayforecast").empty();
  //   for (let i = 1; i <= 5; i++) {
  //       let iconurl = "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
  //       $("#fivedayforecast").append(
  //           `<div class="dailycard col-2.4">
  //           <div class="card-header">
  //           ${moment().add(i, 'days').format("MM/DD/YY")}
  //           <span id="icon"><img id="wicon${i}" src="${iconurl}" alt=""></span>
  //           </div>
  //           <p>Temp: <span>${parseInt(data.daily[i].temp.min)} - ${parseInt(data.daily[i].temp.max)}${tempUnit}</span></p>
  //           <p>Wind: <span>${data.daily[i].wind_speed} ${windUnit}</span></p>
  //           <p>Humidity: <span>${data.daily[i].humidity}%</span></p>
  //           <p>UV Index: <span class="${checkUVIClass(data.daily[i].uvi)}">${data.daily[i].uvi}</span></p>
  //         </div>`
  //       )
  //   }
// }

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  currentweather(city);
  let search = {
    city: $('#citylist').val(),
  }
    return search;
  
});




function loadRecent() {
  var recentSearch = JSON.parse(localStorage.getItem("reacentSearch")) || [];
  if (recentSearch === null) {
    return;
  }
  else {
    cityHistory = recentSearch;
    for (var i = 0; i < cityHistory.length; i++) {
      var historyBtn = document.createElement("button");
      historyBtn.textContent = cityHistory[i];
      historyBtn.classList.add("history-btn");
      historyBtn.setAttribute("id", "city-history");
      searchContainer.appendChild(historyBtn);
    }
  }
}

var history = function(event) {
  var pastHistory = event.target.textContent;
  currentweather(pastHistory);
  history();
}




$('#seachBtn').on("click", displayWeather);
  



