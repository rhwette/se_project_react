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
  const [activeModal, setActiveModal] = useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    console.log('card=', card);
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleAddCardClick = () => {
    console.log('clicked on add clothes button');
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
          title="New garment"
          name="new-card"
          onClose={closeAllModals}
        ></ModalWithForm>
      )}
      {activeModal === 'preview' && (
        <ItemModal card={selectedCard} onClose={closeAllModals} />
      )}
    </div>
  );
};

export default App;
