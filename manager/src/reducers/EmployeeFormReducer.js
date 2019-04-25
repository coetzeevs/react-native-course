import {
  EMPLOYEE_UPDATE,
  SHIFT_SELECT_ERROR,
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
    case SHIFT_SELECT_ERROR:
      return { ...state, error: 'Please select a valid option.' };
    case EMPLOYEE_CREATE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
