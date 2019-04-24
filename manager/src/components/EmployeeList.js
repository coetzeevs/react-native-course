import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.dataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
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
