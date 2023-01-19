import React, { useContext } from 'react';
import './ClothesSection.css';
import '../Profile.css';
import ItemSection from '../../ItemSection/ItemSection';

function ClothesSection({
  className,
  temperature,
  clothingItemArray,
  onCardClick,
}) {
  console.log('inside clothesSection');

  return (
    <div className="clothes">
      {/* <p className="main__items">
        oday is {temperature} {contextValue.currentTemperatureUnit} / Your
        clothes include:
      </p> */}
      <ItemSection
        clothingItemArray={clothingItemArray}
        // clothingType={clothingType}
        clothingType={'Hot'}
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default ClothesSection;
