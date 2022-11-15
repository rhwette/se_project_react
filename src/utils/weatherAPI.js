// WeatherAPI component
//    keep all the data manupulation here(fetching and filtering)
//    import the weatherAPI.js module to App.js

// the request to the API should only happen when
//    mounting the App component

//  the cards need to be filtered by weather typo in 'Main.js",
// so run logic here inside the weatherAPI module

//  API request format
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}
//

// logic defining temp range
// if (temperature >= 86) {
//     return 'hot';
//   } else if (temperature >= 66 && temperature <= 85) {
//     return 'warm';
//   } else if (temperature <= 65) {
//     return 'cold';
//   }

//alternate logic
// if (temperature >= 98) {
//   return 'very hot';
// } else if (temperature >= 86 && temperature <= 97) {
//   return 'hot';
// } else if (temperature >= 66 && temperature <= 85) {
//   return 'warm';
// } else if (temperature >= 45 && temperature <= 65) {
//   return 'cold';
// } else if (temperature <= 44) {
//   return 'very cold';
// }
// import ApiKey from '../ApiKey';
// import { location } from './constants';
// const ApiKey = '908ec48e793598e8e52c18af2928863c';

// import location from './constants';
// import ApiKey from './constants';

// const location = { latitude: '42.809', longitude: '-70.876' };
const location = { latitude: '29.78', longitude: '-95.82' };
const ApiKey = '1e14b0e92d8d793d9c815b2ec73579de';
// console.log('ApiKey=', ApiKey);
// console.log('location.latitude=', location.latitude);
const parsedLocation = `${location.latitude}, ${location.longitude}`;

// const currentDate1 = new Date();
// const currentHour = currentDate1.getHours();
// console.log('currentHour=', currentHour);

const getForecastWeather = ({ location }, ApiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${ApiKey}`
  ).then((res) => {
    if (res.ok) {
      // console.log('res=', res.json);
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
    } else if (weather.id >= 500 && weather.id <= 531) {
      weatherIcon = '../images/dayRain.jpg';
      containerColor = '#6CA6C7';
      className = 'container__dayRain';
    }
  }

  function setNightWeather() {
    if ((weather.id = 800)) {
      weatherIcon = '../images/nightSunny.jpg';
      containerColor = '#00A3FF';
      className = 'container__nightSunny';
    } else if (weather.id >= 801 && weather.id <= 804) {
      weatherIcon = '../images/nightCloudy.jpg';
      containerColor = '#00A3FF';
      className = 'container__nightCloudy';
    } else if (weather.id >= 500 && weather.id <= 531) {
      weatherIcon = '../images/nightRain.jpg';
      containerColor = '#6CA6C7';
      className = 'container__nightRain';
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
