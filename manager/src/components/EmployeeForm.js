import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white', paddingTop: 5 }}>
          <Text style={styles.errorTextStyle}>
           {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Surname"
            placeholder="Smith"
            value={this.props.surname}
            onChangeText={text => this.props.employeeUpdate({ prop: 'surname', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="083 659 3049"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        {this.renderError()}

        <CardSection style={{ borderBottomWidth: 0 }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Picker
            style={styles.pickerStyle} itemStyle={styles.pickerItemStyle}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Select option..." value="" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    height: 88
  },
  pickerItemStyle: {
    height: 88
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
