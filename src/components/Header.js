import React, { memo } from 'react';


const Header = memo(({ cartCount }) => {
  return (
    <header style={{background:'#222',color:'#fff',padding:'16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h1 style={{margin:0,fontSize:'2rem'}}>🍕 FoodHub</h1>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span>Cart Items</span>
        <div style={{background:'#ff9800',borderRadius:'50%',padding:'4px 12px',color:'#fff',fontWeight:'bold'}}>{cartCount}</div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
