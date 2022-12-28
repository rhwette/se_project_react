import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
// import ItemSection from '../ItemSection/ItemSection';
// import ItemCard from '../ItemCard/ItemCard';
// import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { location } from '../../utils/constants';
import { getForecastWeather } from '../../utils/weatherApi';
import { filterDataFromWeatherApi } from '../../utils/weatherApi';
import defaultClothingItems from '../../utils/clothingItems';
import { ApiKey } from '../../utils/constants';
import {
  BASE_URL,
  addItem,
  getItemList,
  handleServerResponse,
  removeItem,
} from '../../utils/api';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
const App = () => {
  // the initial state of state variables contains the correct data type
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState({});
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = React.useState(null);

  // the App component makes an API request for the weather data (only once - on mounting)

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, ApiKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // the App component saves default clothing items in the state
  useEffect(() => {
    getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const closeAllModals = () => {
    setActiveModal('');
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  const handleAddItemSubmit = (item) => {
    addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeAllModals();
      })
      .catch((err) => console.log(err));
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
    // setActiveModal('create');
    setActiveModal('preview');
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
          <Header
            currentDate={currentDate}
            city={weatherData.city}
            name={'Elise Bower'}
            clickHandler={handleAddCardClick}
          />
          <Main
            className={weatherData.className}
            temperature={weatherData.temperature}
            clothingItemArray={defaultClothingItems}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        {activeModal === 'create' && (
          <ModalWithForm
            title={'New garment'}
            buttonLabel={'Add garment'}
            onClose={closeAllModals}
          >
            {/* first child starts here */}
            <label htmlFor="place-name" className="ModalWithForm-heading">
              Name
              <input
                type="text"
                name="name"
                id="place-name"
                className="ModalWithForm-input modal__input_type_card-name"
                placeholder="Name"
                required
                minLength="1"
                maxLength="30"
              />
              <span className="modal__error" id="place-name-error"></span>
            </label>

            {/* second child starts here */}
            <label htmlFor="place-link" className="ModalWithForm-heading">
              Image
              <input
                type="url"
                name="link"
                id="place-link"
                className="ModalWithForm-input modal__input_type_url"
                placeholder="Image URL"
                required
              />
              <span className="modal__error" id="place-link-error"></span>
            </label>

            {/* third child starts here */}
            <p className="ModalWithForm-heading">select weather type</p>
            <div className="ModalWithForm-input modal__input_type_radio">
              <div>
                <input
                  type="radio"
                  id="choiceHot"
                  name="weatherType"
                  value="hot"
                />
                <label className="modal__label_radio" htmlFor="choiceHot">
                  Hot
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="choiceWarm"
                  name="weatherType"
                  value="warm"
                />
                <label className="modal__label_radio" htmlFor="choiceWarm">
                  Warm
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="choiceCold"
                  name="weatherType"
                  value="cold"
                />
                <label className="modal__label_radio" htmlFor="choiceCold">
                  Cold
                </label>
              </div>
            </div>

            {/* end children here */}
          </ModalWithForm>
        )}
        {activeModal === 'preview' && (
          <ItemModal card={selectedCard} onClose={closeAllModals} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
