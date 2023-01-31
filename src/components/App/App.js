import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { location } from '../../utils/constants';
import { getForecastWeather } from '../../utils/weatherApi';
import { filterDataFromWeatherApi } from '../../utils/weatherApi';
import { ApiKey } from '../../utils/constants';
import { nameOfPerson } from '../../utils/constants';
import { addItem, getItemList, removeItem } from '../../utils/api';
import AddItemModal from '../AddItemModal/AddItemModal';

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState([]);
  const [activeModal, setActiveModal] = useState('');
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  let temperature = weatherData.temperature;

  temperature =
    currentTemperatureUnit === 'F'
      ? Math.round(temperature)
      : Math.round((temperature - 32) * (5 / 9));
  let roundedTemperature = temperature;

  const weatherType = () => {
    if (currentTemperatureUnit === 'F') {
      if (roundedTemperature >= 86) {
        return 'hot';
      } else if (roundedTemperature >= 66 && roundedTemperature < 86) {
        return 'warm';
      } else if (roundedTemperature < 66) {
        return 'cold';
      }
    } else if (currentTemperatureUnit === 'C') {
      if (roundedTemperature >= 30) {
        return 'hot';
      } else if (roundedTemperature >= 18.89 && roundedTemperature < 30) {
        return 'warm';
      } else if (roundedTemperature < 18.89) {
        return 'cold';
      }
    }
  };

  const clothingType = weatherType();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, ApiKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (card, isFromProfile) => {
    setIsProfileModal(isFromProfile);
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const closeAllModals = () => {
    setActiveModal('');
  };

  const modalFormAdd = (name, imageUrl, weather) => {
    const id = clothingItems.length;

    addItem({ id, name, weather, imageUrl }).then((response) => {
      setClothingItems([...clothingItems, response]);
    });
    closeAllModals();
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  const handleCardDelete = (card) => {
    removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
      })
      .catch((err) => console.log(err));
  };

  const handleAddCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('create');
  };

  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    time: 'numeric',
  });

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="App-content">
          <Router>
            <Header
              currentDate={currentDate}
              city={weatherData.city}
              name={nameOfPerson}
              clickHandler={handleAddCardClick}
            />
            <Route exact path="/">
              {weatherData.temperature && (
                <Main
                  className={weatherData.className}
                  temperature={weatherData.temperature}
                  clothingItemArray={clothingItems}
                  onCardClick={handleCardClick}
                  clothingType={clothingType}
                />
              )}
            </Route>
            <Route exact path="/profile">
              {clothingItems.length !== 0 && (
                <Profile
                  nameOfPerson={nameOfPerson}
                  cards={clothingItems}
                  onCardClick={handleCardClick}
                  onCardDelete={handleCardDelete}
                  onAddNewClick={() => setActiveModal('create')}
                  clothingType={clothingType}
                  clickHandler={handleAddCardClick}
                />
              )}
            </Route>
          </Router>
          <Footer />
        </div>
        {activeModal === 'create' && (
          <AddItemModal
            modalFormAdd={modalFormAdd}
            closeAllModals={closeAllModals}
          />
        )}
        {activeModal === 'preview' && (
          <ItemModal
            card={selectedCard}
            onClose={closeAllModals}
            isProfileModal={isProfileModal}
            setActiveModal={setActiveModal}
            setClothingItems={setClothingItems}
            onCardClick={handleCardClick}
            handleCardDelete={handleCardDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
