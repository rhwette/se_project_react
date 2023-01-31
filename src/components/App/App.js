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

  const modalFormAdd = (evt) => {
    evt.preventDefault();
    const id = clothingItems.length;
    console.log('clothingItems', clothingItems);
    const name = evt.target.querySelector('#clothing-name').value;
    const imageUrl = evt.target.querySelector('#clothing-link').value;
    const weather = evt.target.querySelector(
      'input[name="weatherType"]:checked'
    ).value;
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
          <ModalWithForm
            title={'New garment'}
            buttonLabel={'Add garment'}
            onSubmit={modalFormAdd}
            onClose={closeAllModals}
          >
            {/* first child starts here */}
            <label htmlFor="clothing-name" className="ModalWithForm-heading">
              Name
              <input
                type="text"
                name="name"
                id="clothing-name"
                className="ModalWithForm-input modal__input_type_card-name"
                placeholder="Name"
                required
                minLength="1"
                maxLength="30"
              />
              <span className="modal__error" id="clothing-name-error"></span>
            </label>

            {/* second child starts here */}
            <label htmlFor="clothing-link" className="ModalWithForm-heading">
              Image
              <input
                type="url"
                name="link"
                id="clothing-link"
                className="ModalWithForm-input modal__input_type_url"
                placeholder="Image URL"
                required
              />
              <span className="modal__error" id="clothing-link-error"></span>
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
