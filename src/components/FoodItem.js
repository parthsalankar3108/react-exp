import React, { memo } from 'react';


const FoodItem = memo(({ food, onAddToCart, addedId }) => {
  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    if (addedId === food.id) {
      setClicked(true);
      const t = setTimeout(() => setClicked(false), 1000);
      return () => clearTimeout(t);
    }
  }, [addedId, food.id]);
  const handleClick = () => {
    onAddToCart(food);
  };

  const getFoodEmoji = (category) => {
    const emojis = {
      Italian: '🍝',
      'Fast Food': '🍔',
      Vegan: '🥗',
      Indian: '🍛',
    };
    return emojis[category] || '🍲';
  };

  return (
    <div style={{border:'1px solid #eee',borderRadius:8,padding:16,minWidth:200,background:'#fff',boxShadow:'0 2px 8px #eee'}}>
      <div style={{fontSize:'2.5rem',textAlign:'center'}}>{getFoodEmoji(food.category)}</div>
      <div>
        <h3 style={{margin:'8px 0 4px'}}>{food.name}</h3>
        <p style={{margin:0,color:'#888'}}>{food.category}</p>
        <p style={{margin:'4px 0',fontWeight:'bold'}}>₹{food.price}</p>
        <button
          style={{background:clicked?'#4caf50':'#ff9800',color:'#fff',border:'none',borderRadius:4,padding:'6px 12px',cursor:'pointer',transition:'background 0.2s'}}
          onClick={handleClick}
          aria-label={`Add ${food.name} to cart`}
          disabled={clicked}
        >
          {clicked ? 'Added!' : '+ Add to Cart'}
        </button>
      </div>
    </div>
  );
});

FoodItem.displayName = 'FoodItem';

export default FoodItem;
