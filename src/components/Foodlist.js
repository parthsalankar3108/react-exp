import React, { memo } from 'react';
import FoodItem from './FoodItem';


const FoodList = memo(({ foods, onAddToCart, addedId }) => {
  if (foods.length === 0) {
    return (
      <div style={{padding:'24px'}}>
        <h2 style={{fontSize:'1.5rem'}}>Loading Menu...</h2>
      </div>
    );
  }

  return (
    <section style={{padding:'24px'}}>
      <h2 style={{fontSize:'1.5rem'}}>🍽️ Our Menu</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
        {foods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
            addedId={addedId}
          />
        ))}
      </div>
    </section>
  );
});

FoodList.displayName = 'FoodList';

export default FoodList;

