import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, shiftSelectError, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, surname, phone, shift } = this.props;
    if (shift === '') {
      console.log('oh snap bitch');
      this.props.shiftSelectError();
    } else {
      console.log({ name, surname, phone, shift });
      this.props.employeeSave({ name, surname, phone, shift, uid: this.props.employee.uid });
    }
  }

  onTextPress() {
    const { name, phone, shift } = this.props;

    text(phone, `Hey ${name}, \nYour upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, surname, phone, shift } = state.employeeForm;
  return { name, surname, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  shiftSelectError,
  employeeSave
})(EmployeeEdit);
