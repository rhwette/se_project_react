import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
// import Button from '../Button/Button';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ItemSection from '../ItemSection/ItemSection';
import ItemCard from '../ItemCard/ItemCard';
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { location } from '../../utils/constants';
import { getForecastWeather } from '../../utils/weatherApi';
import { filterDataFromWeatherAPI } from '../../utils/weatherApi';
import defaultClothingItems from '../../utils/clothingItems';
import { ApiKey } from '../../utils/constants';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState({});
  const [activeModal, setActiveModal] = useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    console.log('card=', card);
    setSelectedCard(card);
    setActiveModal('preview');
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
          // console.log('APP JS data=', data);
          const weather = {};
          weather.city = data.name;
          weather.temperature = data.main.temp;
          weather.id = data.weather[0].id;
          // console.log('weather=', weather);
          // console.log('weather.city=', weather.city);
          // console.log('weather.temperature=', weather.temperature);
          // console.log('weather.id=', weather.id);
          // console.log('currentDate', currentDate);
          // console.log('currentHour', currentHour);
          setWeatherData(filterDataFromWeatherAPI(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);
  // console.log('location.latitude=', location.latitude);

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
          clickHandler={() => {
            console.log('you clicked me once');
          }}
          // avatar={}
        />
        <Main
          // icon={weatherData.weatherIcon}
          className={weatherData.className}
          temperature={weatherData.temperature}
          clothingItemArray={defaultClothingItems}
          onCardClick={handleCardClick}
        />
        {/* {activeModal === 'preview' && <div> ItemPopup</div>} */}

        <Footer />
      </div>
      {activeModal === 'create' && (
        <ModalWithForm
          title="New garment"
          name="new-card"
          onClose={closeAllModals}
        >
          <label className="modal__label">
            <input
              type="text"
              name="name"
              id="place-name"
              className="modal__input modal__input_type_card-name"
              placeholder="Title"
              required
              minLength="1"
              maxLength="30"
            />
            <span className="modal__error" id="place-name-error"></span>
          </label>
          <label className="modal__label">
            <input
              type="url"
              name="link"
              id="place-link"
              className="modal__input modal__input_type_url"
              placeholder="Image URL"
              required
            />
            <span className="modal__error" id="place-link-error"></span>
          </label>
          <p>Select the weather type:</p>
          <div className="modal__input modal__input_type_radio">
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
        </ModalWithForm>
      )}
      {activeModal === 'preview' && (
        <ItemModal card={selectedCard} onClose={closeAllModals} />
      )}
    </div>
  );
};

export default App;
