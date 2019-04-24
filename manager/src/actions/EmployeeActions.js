import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE_FAIL
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, surname, phone, shift }) => {
  console.log(name, surname, phone, shift);
  return {
    type: 'None',
    payload: { name, surname, phone, shift }
  };
};

export const employeeCreateFail = (dispatch) => {
  dispatch({ type: EMPLOYEE_CREATE_FAIL });
};
