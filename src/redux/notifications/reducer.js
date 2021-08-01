import {SET_SHOW_PAYDAY_CONGRATULATIONS} from './actions';

const initialState = {
  showPayDayCongratulations: false,
};

export const notificationsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SHOW_PAYDAY_CONGRATULATIONS:
      return {
        ...state,
        showPayDayCongratulations: payload.showPayDayCongratulations,
      };

    default:
      return state;
  }
};
