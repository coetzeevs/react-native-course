import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
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

export const employeeCreateFail = () => {
  return {
    type: EMPLOYEE_CREATE_FAIL
  };
};
