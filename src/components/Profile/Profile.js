import React from 'react';
import './Profile.css';
import SideBar from './SideBar/SideBar';
import './SideBar/SideBar.css';
import ClothesSection from './ClothesSection/ClothesSection';
import './ClothesSection/ClothesSection.css';
import clothingType from '../Main/Main';

const Profile = ({
  nameOfPerson,
  cards,
  onCardClick,
  onCardDelete,
  onAddNewClick,
  clothingType,
  clickHandler,
}) => {
  return (
    <div className="profile">
      <section className="profile-sidebar">
        <SideBar name={nameOfPerson} />
      </section>
      <section className="profile-clothes">
        <ClothesSection
          clothingItemArray={cards}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          onAddNewClick={onAddNewClick}
          clothingType={clothingType}
          clickHandler={clickHandler}
        />
      </section>
    </div>
  );
};

export default Profile;
