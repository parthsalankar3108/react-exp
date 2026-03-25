import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import Header from './components/Header';
import FoodList from './components/Foodlist';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart, removeFromCart, clearCart } from './redux/cartActions';
import { fetchFoods } from './redux/foodActions';

function App() {
  // Inline useFoodList
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  const navigate = useNavigate();
  const location = useLocation();
  const [addedId, setAddedId] = useState(null);
  useEffect(() => {
    const defaultFoods = [
      { id: 1, name: 'Pizza Margherita', price: 250, category: 'Italian' },
      { id: 2, name: 'Chicken Burger', price: 150, category: 'Fast Food' },
      { id: 3, name: 'Pasta Carbonara', price: 200, category: 'Italian' },
      { id: 4, name: 'Veggie Sandwich', price: 100, category: 'Vegan' },
      { id: 5, name: 'Tandoori Chicken', price: 300, category: 'Indian' },
      { id: 6, name: 'Dal Makhani', price: 180, category: 'Indian' },
    ];
    dispatch(fetchFoods(defaultFoods));
  }, [dispatch]);

  // Inline useCart
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (food) => {
    dispatch(addToCart(food));
    setAddedId(food.id);
    setTimeout(() => setAddedId(null), 1000);
  };
  const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));
  const handleClearCart = () => dispatch(clearCart());
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header cartCount={totalQuantity} />
      <nav style={{ display: 'flex', gap: 16, margin: 16, justifyContent: 'center', fontWeight: 500, fontSize: 18 }}>
        <Link style={{ color: location.pathname === '/' ? '#ff9800' : '#222', textDecoration: 'none', padding: 8, borderRadius: 4, background: location.pathname === '/' ? '#fff3e0' : 'transparent' }} to="/">Menu</Link>
        <Link style={{ color: location.pathname === '/cart' ? '#ff9800' : '#222', textDecoration: 'none', padding: 8, borderRadius: 4, background: location.pathname === '/cart' ? '#fff3e0' : 'transparent' }} to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FoodList foods={foods} onAddToCart={handleAddToCart} addedId={addedId} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onClearCart={handleClearCart} totalPrice={totalPrice} onCheckout={() => navigate('/thankyou')} />} />
        <Route path="/thankyou" element={<div style={{textAlign:'center',marginTop:80}}><h1 style={{fontSize:'2.5rem',color:'#4caf50'}}>Thank you for your order! 🎉</h1><p style={{fontSize:'1.2rem'}}>Your food is on the way.</p><button style={{marginTop:32,background:'#ff9800',color:'#fff',border:'none',borderRadius:4,padding:'10px 24px',fontSize:'1.1rem',cursor:'pointer'}} onClick={()=>navigate('/')}>Back to Menu</button></div>} />
      </Routes>
    </>
  );
}

export default App;
