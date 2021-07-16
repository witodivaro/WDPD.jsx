import {SET_IS_FIRST_LAUNCH, SET_SALARY} from './actions';

const initialState = {
  salary: null,
  isFirstLaunch: true,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SALARY:
      return {
        ...state,
        salary: payload.salary,
      };

    case SET_IS_FIRST_LAUNCH:
      return {
        ...state,
        isFirstLaunch: payload.isFirstLaunch,
      };

    default:
      return state;
  }
};
