// Header Component

// header component is a child of App.js

// 1. logo

// 2. current date
//use the Date() object to generate current date
// const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

// 3. current location

// 4. Add clothes button that opens 'ModalWithForm'

// 5. user's name and avatar....both hardcoded at this point

// import React from 'react';
// import './Header.css';
// import './Navigation.css';
// import logoPath from '../../images/logo.svg';
// import avatarDefault from '../../images/avatar-default.jpg';

// const Header = ({ weatherData, handleAddClick }) => {
//   if (!weatherData) return null;
//   const currentDate = new Date().toLocaleString('default', {
//     month: 'long',
//     day: 'numeric',
//   });
//   const username = 'Elise Bouer';
//   const avatar = '';

//   return (
//     <header className="header">
//       <div className="header__container">
//         <img src={logoPath} alt="logo" className="header__logo" />
//         <p className="header__date">
//           {currentDate}, {weatherData.city}
//         </p>
//       </div>
//       <div className="header__nav">
//         <nav className="navigation">
//           <ul className="navigation__container">
//             <li>
//               <button onClick={handleAddClick} className="navigation__button">
//                 + Add clothes
//               </button>
//             </li>
//             <li>
//               <div className="navigation__link">
//                 {username}
//                 {avatar ? (
//                   <img
//                     className="navigation__user"
//                     // Add user avatar prop and replace this with itemID
//                     src={avatar || avatarDefault}
//                     alt="user avatar"
//                   />
//                 ) : (
//                   // takes username, turns string to uppercase and takes first letter
//                   <span className="navigation__user navigation__user_type_none">
//                     {username?.toUpperCase().charAt(0) || ''}
//                   </span>
//                 )}
//               </div>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { Component } from 'react';
import './Header.css';
import logoPath from './wtwr°.jpg';
import avatarPath from './avatar-default2.jpg';
// import avatar-default from '../images/avatar-default.jpg';
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
} from '../../utils/weatherApi';

function Header({ currentDate, city, name, clickHandler }) {
  // const currentDate = new Date().toLocaleString('default', {
  //   month: 'long',
  //   day: 'numeric',
  // });
  // const username = 'Elise Bauer';
  const avatar = '';
  // console.log('currentDate=', currentDate);
  // console.log('city=', city);
  return (
    <header className="header">
      <div className="header__containerLeft">
        <img src={logoPath} alt="logo" className="header__logo" />
      </div>
      <div className="header__containerCenter">
        <p className="header__contentCenter">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__containerRight">
        <button onClick={clickHandler} className="header__button">
          + Add clothes
        </button>
        <p className="header__contentRight"> {name}</p>
        <img src={avatarPath} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
