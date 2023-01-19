import React from 'react';
import './Profile.css';
import SideBar from './SideBar/SideBar';
import './SideBar/SideBar.css';
import ClothesSection from './ClothesSection/ClothesSection';
import ItemSection from '../ItemSection/ItemSection';
import './ClothesSection/ClothesSection.css';

const Profile = ({
  nameProfile,
  cards,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) => {
  console.log('cardss=', cards);

  return (
    <div className="profile">
      <section className="profile-sidebar">
        <SideBar nameProfile={nameProfile} />
      </section>
      <section className="profile-clothes">
        <ItemSection
          clothingItemArray={cards}
          clothingType={'cold'}
          onAddNewClick={onAddNewClick}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
        />
        {/* <ClothesSection
        sectionData={cards}
        onAddNewClick={onAddNewClick}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
      /> */}
      </section>
    </div>
  );
};

export default Profile;
