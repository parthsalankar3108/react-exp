export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

export const addToCart = (food) => ({
  type: ADD_TO_CART,
  payload: food,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const updateCartQuantity = (id, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { id, quantity },
});
