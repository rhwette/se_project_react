// WeatherAPI component
//    keep all the data manupulation here(fetching and filtering)
//    import the weatherAPI.js module to App.js

// the request to the API should only happen when
//    mounting the App component

//  the cards need to be filtered by weather typo in 'Main.js",
// so run logic here inside the weatherAPI module

//  API request format
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
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
