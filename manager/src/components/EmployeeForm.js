import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
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
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
