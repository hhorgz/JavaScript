class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.description = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.dewPoint = document.getElementById("w-dewpoint");
        this.wind = document.getElementById("w-wind");
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + " °C";
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Max. Temp: ${weather.main.temp_max} °C`;
        this.dewPoint.textContent = `Min. Temp: ${weather.main.temp_min} °C`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;

    }
}