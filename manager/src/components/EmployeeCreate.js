import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  updateName(text) {
    this.props.employeeUpdate({ prop: 'name', value: text });
  }

  updatePhone(phone) {
    this.props.employeeUpdate({ props: 'phone', value: phone });
  }

  render() {
    const { name, phone, shift } = this.props;
    console.log('name', name);

    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={this.updateName.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="123-123-1234"
            value={phone}
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
