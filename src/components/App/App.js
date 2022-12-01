import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemSection from '../ItemSection/ItemSection';
import ItemCard from '../ItemCard/ItemCard';
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { location } from '../../utils/constants';
import { getForecastWeather } from '../../utils/weatherApi';
import { filterDataFromWeatherApi } from '../../utils/weatherApi';
import defaultClothingItems from '../../utils/clothingItems';
import { ApiKey } from '../../utils/constants';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState({});
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleAddCardClick = () => {
    setActiveModal('create');
  };

  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    time: 'numeric',
  });

  const closeAllModals = () => {
    setActiveModal();
  };

  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather({ location }, ApiKey)
        .then((data) => {
          const weather = {};
          weather.city = data.name;
          weather.temperature = data.main.temp;
          weather.id = data.weather[0].id;
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="App">
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
          {/* <p className="ModalWithForm-heading">Image</p> */}
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
    </div>
  );
};

export default App;
