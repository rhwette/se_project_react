// const location = { latitude: '42.809', longitude: '-70.876' };
const location = { latitude: '29.78', longitude: '-95.82' };
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

const filterDataFromWeatherAPI = (data) => {
  if (!data) {
    return null;
  }

  let daytime = 'false';
  let nighttime = 'false';
  console.log('daytime=', daytime);
  console.log('nighttime=', nighttime);

  const currentDate1 = new Date();
  const currentHour = currentDate1.getHours();
  console.log('currentHour=', currentHour);

  if (currentHour > 6 && currentHour < 18) {
    daytime = 'true';
  } else {
    nighttime = 'true';
  }
  console.log('daytime=', daytime);
  console.log('nighttime=', nighttime);

  console.log('data=', data);
  const weather = {};
  weather.city = data.name;
  weather.temperature = data.main.temp;
  weather.id = data.weather[0].id;
  console.log('weather=', weather);
  console.log('weather.city=', weather.city);
  console.log('weather.temperature=', weather.temperature);
  console.log('weather.id=', weather.id);

  let weatherIcon;
  let containerColor;
  let className;
  function setDayWeather() {
    if ((weather.id = 800)) {
      weatherIcon = '../images/daySunny.jpg';
      containerColor = '#00A3FF';
      className = 'container__daySunny';
    } else if (weather.id >= 801 && weather.id <= 804) {
      weatherIcon = '../images/dayCloudy.jpg';
      containerColor = '#00A3FF';
      className = 'container__dayCloudy';
    } else if (weather.id >= 701 && weather.id <= 781) {
      weatherIcon = '../images/dayFog.jpg';
      containerColor = '#6CA6C7';
      className = 'container__dayFog';
    } else if (weather.id >= 600 && weather.id <= 622) {
      weatherIcon = '../images/daySnow.jpg';
      containerColor = '#6CA6C7';
      className = 'container__daySnow';
    } else if (weather.id >= 500 && weather.id <= 531) {
      weatherIcon = '../images/dayRain.jpg';
      containerColor = '#6CA6C7';
      className = 'container__dayRain';
    } else if (weather.id >= 300 && weather.id <= 321) {
      weatherIcon = '../images/dayRain.jpg';
      containerColor = '#6CA6C7';
      className = 'container__dayRain';
    } else if (weather.id >= 200 && weather.id <= 232) {
      weatherIcon = '../images/dayStorm.jpg';
      containerColor = '#6CA6C7';
      className = 'container__dayStorm';
    }
  }

  function setNightWeather() {
    if ((weather.id = 800)) {
      weatherIcon = '../images/nightSunny.jpg';
      containerColor = '#286897';
      className = 'container__nightSunny';
    } else if (weather.id >= 801 && weather.id <= 804) {
      weatherIcon = '../images/nightCloudy.jpg';
      containerColor = '#286897';
      className = 'container__nightCloudy';
    } else if (weather.id >= 701 && weather.id <= 781) {
      weatherIcon = '../images/nightFog.jpg';
      containerColor = '#286897';
      className = 'container__nightFog';
    } else if (weather.id >= 600 && weather.id <= 622) {
      weatherIcon = '../images/nightSnow.jpg';
      containerColor = '#286897';
      className = 'container__nightSnow';
    } else if (weather.id >= 500 && weather.id <= 531) {
      weatherIcon = '../images/nightRain.jpg';
      containerColor = '#286897';
      className = 'container__nightRain';
    } else if (weather.id >= 300 && weather.id <= 321) {
      weatherIcon = '../images/nightRain.jpg';
      containerColor = '#286897';
      className = 'container__nightRain';
    } else if (weather.id >= 200 && weather.id <= 232) {
      weatherIcon = '../images/nightStorm.jpg';
      containerColor = '##286897';
      className = 'container__nightStorm';
    }
  }

  if ('daytime') {
    setDayWeather();
  } else {
    setNightWeather();
  }

  console.log('daytime=', daytime);
  console.log('nighttime=', nighttime);
  console.log('weatherIcon=', weatherIcon);
  console.log('containerColor=', containerColor);
  console.log('className=', className);
  return weather;
};

export { getForecastWeather, filterDataFromWeatherAPI };
