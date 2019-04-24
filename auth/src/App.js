import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Body } from './components/common';
import { Login, SignUp, Welcome } from './components';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCeA5PYAdGDYm7TL8BqKP4JiZnN1O4L2ow',
    authDomain: 'auth-e4307.firebaseapp.com',
    databaseURL: 'https://auth-e4307.firebaseio.com',
    projectId: 'auth-e4307',
    storageBucket: 'auth-e4307.appspot.com',
    messagingSenderId: '419489545293'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return (
          <LoginForm />
        );
      default:
        return <Spinner />;
    }
  }

  render () {
    return (
      <View>
        <Header headerText='' />
        <Body>
          {this.renderContent()}
        </Body>
      </View>
    );
  }
}

export default App;
