import React, { memo } from 'react';


const Cart = memo(({
  cartItems,
  onRemoveFromCart,
  onClearCart,
  totalPrice,
  onCheckout
}) => {
  const handleQuantityChange = (id, newQuantity) => {
    // Optionally implement quantity update
  };

  if (cartItems.length === 0) {
    return (
      <section style={{padding:'24px'}}>
        <div style={{background:'#fff',borderRadius:8,padding:24,maxWidth:400,margin:'0 auto',boxShadow:'0 2px 8px #eee'}}>
          <h2 style={{fontSize:'1.5rem'}}>🛒 Your Cart</h2>
          <div style={{textAlign:'center',color:'#888',margin:'24px 0'}}>
            <div style={{fontSize:'2rem'}}>🛒</div>
            <p>Your cart is empty. Add some delicious food!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{padding:'24px'}}>
      <div style={{background:'#fff',borderRadius:8,padding:24,maxWidth:500,margin:'0 auto',boxShadow:'0 2px 8px #eee'}}>
        <h2 style={{fontSize:'1.5rem'}}>🛒 Your Cart</h2>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid #eee',padding:'8px 0'}}>
              <div>
                <h4 style={{margin:'0 0 4px'}}>{item.name}</h4>
                <p style={{margin:0,color:'#888'}}>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <button style={{padding:'2px 8px'}} onClick={() => handleQuantityChange(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                <span>{item.quantity}</span>
                <button style={{padding:'2px 8px'}} onClick={() => handleQuantityChange(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button style={{background:'#ff9800',color:'#fff',border:'none',borderRadius:4,padding:'4px 10px',cursor:'pointer'}} onClick={() => onRemoveFromCart(item.id)} aria-label={`Remove ${item.name} from cart`}>Remove</button>
            </div>
          ))}
        </div>
        <div style={{marginTop:24}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span>Subtotal:</span>
            <span>₹{totalPrice}</span>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span>Delivery Fee:</span>
            <span>₹50</span>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span>Tax (5%):</span>
            <span>₹{Math.round(totalPrice * 0.05)}</span>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',fontWeight:'bold',fontSize:'1.1rem',marginTop:8}}>
            <span>Total:</span>
            <span>₹{totalPrice + 50 + Math.round(totalPrice * 0.05)}</span>
          </div>
          <div style={{display:'flex',gap:12,marginTop:16}}>
            <button style={{background:'#4caf50',color:'#fff',border:'none',borderRadius:4,padding:'8px 16px',cursor:'pointer'}} onClick={onCheckout}>💳 Proceed to Checkout</button>
            <button style={{background:'#f44336',color:'#fff',border:'none',borderRadius:4,padding:'8px 16px',cursor:'pointer'}} onClick={onClearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
});

Cart.displayName = 'Cart';

export default Cart;
