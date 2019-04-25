import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  SHIFT_SELECT_ERROR,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, surname, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, surname, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const shiftSelectError = () => {
  return {
    type: SHIFT_SELECT_ERROR
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
