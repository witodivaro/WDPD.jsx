import {SET_ADVANCE, SET_IS_FIRST_LAUNCH, SET_PAYDAY} from './actions';

const initialState = {
  isFirstLaunch: true,
  advanceDay: null,
  payday: null,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_IS_FIRST_LAUNCH:
      return {
        ...state,
        isFirstLaunch: payload.isFirstLaunch,
      };

    case SET_PAYDAY: {
      const payDay = new Date(payload.payDay);
      payDay.setHours(12, 0, 0, 0);
      return {
        ...state,
        payday: payDay,
      };
    }

    case SET_ADVANCE: {
      return {
        ...state,
        advanceDay: payload.advanceDay,
      };
    }

    default:
      return state;
  }
};
