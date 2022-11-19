import React from 'react';
import './ItemSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ItemSection() {
  return (
    <div className="ItemSection">
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
    </div>
  );
}

export default ItemSection;
