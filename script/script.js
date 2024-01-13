const btn = document.getElementById("btn");
const weather = document.getElementById("weather");
const cityName = document.getElementById("city-name")
const humidiy = document.getElementById("humidiy")
const wind = document.getElementById("wind")
const temperatura  = document.getElementById('temperatura')

const key = "02cddfd6a93eebab321fa6775bc5a605";

const getCity  = async (city) => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const response = await fetch(apiUrl + city + `&appid=${key}`);

  const data = response.json();
  return data;
}


async function elements(data){
    cityName.innerHTML  = data.name;
    humidiy.innerHTML  = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " Km/h"
    temperatura.innerHTML = data.main.temp + "°C"
}

function validate(weather) {
  if (!weather.value || !weather.value.trim()) {
    alert("input bosh");
    input.focus();
    return false;
  }
  return true;
}
btn &&
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (validate(weather)) {
        getCity(weather.value).then((data) => {
            elements(data)
        })
        weather.value = ""
    }
  });
