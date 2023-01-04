import React from 'react';
import './Profile.css';
import SideBar from './SideBar/SideBar';
import './SideBar/SideBar.css';
import ClothesSection from './ClothesSection/ClothesSection';
import './ClothesSection/ClothesSection.css';

const Profile = ({
  nameProfile,
  cards,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar nameProfile={nameProfile} />
    </section>
    <section className="profile-clothes">
      <ClothesSection
        sectionData={cards}
        onAddNewClick={onAddNewClick}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
      />
    </section>
  </div>
);

export default Profile;
