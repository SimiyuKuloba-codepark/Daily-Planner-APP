class UI{
  constructor(){
    this.location = document.querySelector('.eneo');
    this.coordinates = document.querySelector('.gr');
    this.description = document.querySelector('.elezo');
    this.temperature = document.querySelector('.joto');
    this.icon = document.querySelector('.alama');
    this.humidity = document.querySelector('.humidity');
    this.pressure = document.querySelector('.pressure');
    this.feelsLike = document.querySelector('.feels-like');
    this.wind = document.querySelector('.wind');
  }

  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.coordinates.textContent = `Longitude: ${weather.coord.lon} - Latitude: ${weather.coord.lat}`;
    this.description.textContent = weather.weather[0].description;
    this.temperature.textContent = `${weather.main.temp}C`;
    this.icon.setAttribute = ('src', weather.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Air Pressure: ${weather.main.pressure}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} C`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}