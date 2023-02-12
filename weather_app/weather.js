class Weather {
  constructor(eneo){
    this.apiKey = 'b1c3eea77a359063e88e01695c52eb3a';
    this.eneo = eneo;
  }

  // fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.eneo}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // change weather location
  changeLocation(eneo){
    this.eneo = eneo;
  }
}

