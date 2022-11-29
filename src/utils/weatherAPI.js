import { location } from './constants';

const ApiKey = '1e14b0e92d8d793d9c815b2ec73579de';
const parsedLocation = `${location.latitude}, ${location.longitude}`;

const getForecastWeather = ({ location }, ApiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${ApiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const filterDataFromWeatherApi = (data) => {
  if (!data) {
    return null;
  }
  let weather = {};
  weather.daytime = 'false';
  weather.nighttime = 'false';

  const currentDate1 = new Date();
  const currentHour = currentDate1.getHours();

  if (currentHour > 6 && currentHour < 18) {
    weather.daytime = 'true';
  } else {
    weather.nighttime = 'true';
  }

  weather.city = data.name;
  weather.temperature = data.main.temp;
  weather.id = data.weather[0].id;

  function setDayWeather() {
    if (weather.id === 800) {
      weather.weatherIcon = '../images/daySunny.png';
      weather.className = 'main__banner-daySunny';
    } else if (weather.id >= 801 && weather.id <= 804) {
      weather.weatherIcon = '../images/dayCloudy.png';
      weather.className = 'main__banner-dayCloudy';
    } else if (weather.id >= 701 && weather.id <= 781) {
      weather.weatherIcon = '../images/dayFog.png';
      weather.className = 'main__banner-dayFog';
    } else if (weather.id >= 600 && weather.id <= 622) {
      weather.weatherIcon = '../images/daySnow.png';
      weather.className = 'main__banner-daySnow';
    } else if (weather.id >= 500 && weather.id <= 531) {
      weather.weatherIcon = '../images/dayRain.png';
      weather.className = 'main__banner-dayRain';
    } else if (weather.id >= 300 && weather.id <= 321) {
      weather.weatherIcon = '../images/dayRain.png';
      weather.className = 'main__banner-dayRain';
    } else if (weather.id >= 200 && weather.id <= 232) {
      weather.weatherIcon = '../images/dayStorm.png';
      weather.className = 'main__banner-dayStorm';
    }
  }

  function setNightWeather() {
    if (weather.id === 800) {
      weather.weatherIcon = '../images/nightSunny.png';
      weather.className = 'main__banner-nightSunny';
    } else if (weather.id >= 801 && weather.id <= 804) {
      weather.weatherIcon = '../images/nightCloudy.png';
      weather.className = 'main__banner-nightCloudy';
    } else if (weather.id >= 701 && weather.id <= 781) {
      weather.weatherIcon = '../images/nightFog.png';
      weather.className = 'main__banner-nightFog';
    } else if (weather.id >= 600 && weather.id <= 622) {
      weather.weatherIcon = '../images/nightSnow.png';
      weather.className = 'main__banner-nightSnow';
    } else if (weather.id >= 500 && weather.id <= 531) {
      weather.weatherIcon = '../images/nightRain.png';
      weather.className = 'main__banner-nightRain';
    } else if (weather.id >= 300 && weather.id <= 321) {
      weather.weatherIcon = '../images/nightRain.png';
      weather.className = 'main__banner-nightRain';
    } else if (weather.id >= 200 && weather.id <= 232) {
      weather.weatherIcon = '../images/nightStorm.png';
      weather.className = 'main__banner-nightStorm';
    }
  }

  if ('daytime') {
    setDayWeather();
  } else {
    setNightWeather();
  }

  return weather;
};

export { getForecastWeather, filterDataFromWeatherApi };
