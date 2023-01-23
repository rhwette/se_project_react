import React, { useState } from 'react';
import './ClothesCard.css';

// {
//   showModal ? <ConfirmModal /> : null;
// }
function ClothesCard({
  ClothesCardData,
  onCardClick,
  onCardDelete,
  onAddNewClick,
  // setActiveModal,
}) {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const src = ClothesCardData.imageUrl;
  const alternate = ClothesCardData.name;
  const title = ClothesCardData.name;

  // function handleConfirmDelete() {
  //   setShowDeleteModal(false);
  // }

  function handleClick() {
    onCardClick(ClothesCardData, true);
  }

  // function handleDelete() {
  //   onCardDelete(ClothesCardData);
  // }

  return (
    <div className="clothes__container" onClick={handleClick}>
      <h2 className="clothes__title"> {title} </h2>
      <img className="clothes__image" src={src} alt={alternate} />
    </div>
  );
}

export default ClothesCard;
