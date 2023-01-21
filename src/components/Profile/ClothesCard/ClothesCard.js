import React from 'react';
import './ClothesCard.css';

function ClothesCard({
  ClothesCardData,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) {
  const src = ClothesCardData.imageUrl;
  const alternate = ClothesCardData.name;
  const title = ClothesCardData.name;

  function handleClick() {
    onCardClick(ClothesCardData);
  }

  function handleDelete() {
    onCardDelete(ClothesCardData);
  }

  return (
    <div className="clothes__container" onClick={handleClick}>
      <h2 className="clothes__title"> {title} </h2>
      <img className="clothes__image" src={src} alt={alternate} />
      {/* <h3 className="clothes__delete"> delete item </h3> */}
      <button className="clothes__delete" onClick={handleDelete}>
        Delete item
      </button>
    </div>
  );
}

export default ClothesCard;
