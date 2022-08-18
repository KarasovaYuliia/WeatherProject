function displayTemperature(response) {
    console.log(response.data);
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed");
    let description = document.querySelector("#description");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    speedElement.innerHTML = Math.round(response.data.wind.speed);
    description.innerHTML = response.data.weather[0].description;
}

let apiKey = "f2f4d2c4dde5316e6c1c815630c6aee0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);
