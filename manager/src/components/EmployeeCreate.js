import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  updateName(text) {
    this.props.employeeUpdate({ prop: 'name', value: text });
  }

  updatePhone(phone) {
    this.props.employeeUpdate({ prop: 'phone', value: phone });
  }

  renderPicker() {
    const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                    'Saturday', 'Sunday' ];
    return (
      [
        <Text style={styles.pickerTextStyle}>Shift</Text>,
        <Picker
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
          {days.map(day => <Picker.Item key={day} label={day} value={day} />)}
        </Picker>
      ]
    );
  }

  render() {
    const { name, phone } = this.props;

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
            onChangeText={this.updatePhone.bind(this)}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          {this.renderPicker()}
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
