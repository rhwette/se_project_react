//  ItemCard Component renders the image and title for item of clothing
//    the image is an interactive element, so
//    if the user clicks on it, the itemModal will open

//  Note: the item card itself does not know about the modal state

//  Need to pass the state down from App to Main
//    i.e., when user clicks on image,
//    you need to call the state change function 'handleCardClick()
//    that ItemCard receives as a prop
//
const src2 =
  'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591';

function ItemCard() {
  return (
    <>
      <img src={src2} alt={'alternate'} />
      <h2> {'this is the title'}</h2>
      <p>{'this is the subtitle'}</p>
    </>
  );
}

export default ItemCard;

//use these instead
// {/* <h2> {title}</h2> */}
// {/* <p>{subtitle}</p> */}
