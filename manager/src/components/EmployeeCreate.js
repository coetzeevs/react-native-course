import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, shiftSelectError } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, surname, phone, shift } = this.props;
    if (shift === '') {
      this.props.shiftSelectError();
    } else {
      this.props.employeeCreate({ name, surname, phone, shift });
    }
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export const mapStateToProps = (state) => {
  const {
    name,
    surname,
    phone,
    shift,
    error
  } = state.employeeForm;
  return { name, surname, phone, shift, error };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
  shiftSelectError
})(EmployeeCreate);
