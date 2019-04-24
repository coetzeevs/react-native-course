import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_SUCCESS
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
    type: EMPLOYEE_CREATE_SUCCESS,
    payload: { name, surname, phone, shift }
  };
};

export const employeeCreateFail = () => {
  return {
    type: EMPLOYEE_CREATE_FAIL
  };
};
