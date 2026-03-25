import { createStore, combineReducers } from 'redux';
import { foodReducer } from './foodReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  food: foodReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
