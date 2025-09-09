import actionTypes from "../actions/actionTypes";

const initialState = {
  homeData: [],
  test: "Hello",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};
export default appReducer;
