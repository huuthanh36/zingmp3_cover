import * as apis from "../../apis";
import actionTypes from "../actions/actionTypes";

export const getHome = () => async (dispatch) => {
  try {
    const response = await apis.getHome();
    // console.log(response.data);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_HOME,
        homeData: response.data.data.items,
      });
    } else {
      dispatch({
        type: actionTypes.GET_HOME,
        homeData: null,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_HOME,
      homeData: null,
    });
  }
};
