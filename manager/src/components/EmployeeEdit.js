import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <EmployeeForm {...this.props} />
          <Button>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null)(EmployeeEdit);
