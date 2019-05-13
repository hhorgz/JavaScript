class Weather {
    constructor(country, city) {
        this.apiKey = '<place your API Key here>';
        this.country = country;
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(country, city) {
        this.country = country;
        this.city = city;
    }
}