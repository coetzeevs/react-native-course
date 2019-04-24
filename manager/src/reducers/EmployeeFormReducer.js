import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  surname: '',
  phone: '',
  shift: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state,
        [action.payload.prop]: action.payload.value,
        error: ''
      };
    case EMPLOYEE_CREATE_FAIL:
      return { ...state, error: 'Please select a valid option.' };
    case EMPLOYEE_CREATE_SUCCESS:
      return state;
    default:
      return state;
  }
};
