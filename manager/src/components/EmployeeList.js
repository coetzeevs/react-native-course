import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  render() {
    return (
      <View>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
      </View>
    );
  }
}

export default connect(null, { employeeFetch })(EmployeeList);
