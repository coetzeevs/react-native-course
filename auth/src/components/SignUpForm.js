import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class SignUpForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { first_name, last_name, email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFail.bind(this));
  }

  onSignUpSuccess() {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onSignUpFail() {
    this.setState({ error: 'Registration Failed', loading: false });
  }

  displayAuthError() {
    if (this.state.error != '') {
      return (
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      );
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Register
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize={"words"}
            placeholder="John"
            label="First Name"
            value={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize={"words"}
            placeholder="Smith"
            label="Last Name"
            value={this.state.last_name}
            onChangeText={last_name => this.setState({ last_name })}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize={"none"}
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize={"none"}
            secureTextEntry
            placeholder="password12345"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        {this.displayAuthError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default SignUpForm;
