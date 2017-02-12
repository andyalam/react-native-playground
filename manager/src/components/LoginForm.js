import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (password) => {
    this.props.passwordChanged(password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
