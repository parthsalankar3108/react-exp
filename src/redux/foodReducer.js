import { FETCH_FOODS, SET_LOADING, SET_ERROR } from './foodActions';

const initialState = {
  foods: [],
  loading: false,
  error: null,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        foods: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
