function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesaday", "Wednsday", "Thirsday", "Saturday", "Sunday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    console.log(response.data);
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed");
    let pressureElement = document.querySelector("#pressure");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    let description = document.querySelector("#description");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    speedElement.innerHTML = Math.round(response.data.wind.speed);
    pressureElement.innerHTML = Math.round(response.data.main.pressure);
    description.innerHTML = response.data.weather[0].description;
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function search(city) {
    let apiKey = "f2f4d2c4dde5316e6c1c815630c6aee0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}

search("New York");



let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);