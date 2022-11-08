const initialState = {
  counter: 0,
  isShown: true
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE = 'TOGGLE';

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (action.payload) {
        return { counter: state.counter + action.payload };
      }
      console.log(action);
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case TOGGLE:
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
};

export const increment = (value) => ({ type: INCREMENT, payload: value });
export const decrement = () => ({ type: DECREMENT });
export const toggle = () => ({ type: TOGGLE });

export default counterReducer;
