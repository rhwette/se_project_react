//  ItemCard Component renders the image and title for item of clothing
//    the image is an interactive element, so
//    if the user clicks on it, the itemModal will open

//  Note: the item card itself does not know about the modal state

//  Need to pass the state down from App to Main
//    i.e., when user clicks on image,
//    you need to call the state change function 'handleCardClick()
//    that ItemCard receives as a prop
//

import React from 'react';
import './ItemCard.css';

// 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591';

function ItemCard({ ItemCardData, onCardClick }) {
  console.log('ItemCardData=', ItemCardData);
  const src2 = ItemCardData.link;
  const alternate = ItemCardData.name;
  const title = ItemCardData.name;
  // console.log('title=', title);

  /////////
  function handleClick() {
    onCardClick(ItemCardData);
  }

  return (
    <>
      <div className="ItemContainer" onClick={handleClick}>
        <h2 className="ItemCard__title"> {title}</h2>
        <img className="ItemCard__image" src={src2} alt={alternate} />
      </div>
    </>
  );
}

export default ItemCard;

//use these instead
// {/* <h2> {title}</h2> */}
// {/* <p>{subtitle}</p> */}
