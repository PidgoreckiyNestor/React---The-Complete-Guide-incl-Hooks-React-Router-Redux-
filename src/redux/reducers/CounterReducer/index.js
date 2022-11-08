
const initialState = {
  counter: 0,
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (action.payload){
        return { counter: state.counter + (action.payload) }
      }
      console.log(action);
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }

};

export const increment = (value) => ({ type: INCREMENT, payload: value });
export const decrement = () => ({ type: DECREMENT });

export default counterReducer;
