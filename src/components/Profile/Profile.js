import React from 'react';
import './Profile.css';
import SideBar from './SideBar/SideBar';
import './SideBar/SideBar.css';
import ClothesSection from './ClothesSection/ClothesSection';
import './ClothesSection/ClothesSection.css';

const Profile = ({
  nameOfPerson,
  cards,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) => {
  console.log('cardss=', cards);
  console.log('nameOfPerson=', nameOfPerson);

  return (
    <div className="profile">
      <section className="profile-sidebar">
        <SideBar name={nameOfPerson} />
      </section>
      <section className="profile-clothes">
        <ClothesSection
          clothingItemArray={cards}
          clothingType={'cold'}
          onAddNewClick={onAddNewClick}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
        />
      </section>
    </div>
  );
};

export default Profile;
