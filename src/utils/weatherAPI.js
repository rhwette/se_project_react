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

const location = { latitude: '42.809', longitude: '-70.876' };
const ApiKey = '1e14b0e92d8d793d9c815b2ec73579de';
console.log('ApiKey=', ApiKey);
console.log('location.latitude=', location.latitude);
const parsedLocation = `${location.latitude}, ${location.longitude}`;

const getForecastWeather = ({ location }, ApiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${ApiKey}`
  ).then((res) => {
    if (res.ok) {
      console.log('res=', res);
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};
console.log('parsedLocation=', parsedLocation);
console.log('location=', location);

const filterDataFromWeatherAPI = (data) => {
  if (!data) {
    return null;
  }
  const weather = {};
  weather.city = data.location.name;
  weather.temperature = data.current.temp_f;
  return weather;
};

export { getForecastWeather, filterDataFromWeatherAPI };
