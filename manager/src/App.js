import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDDpQ3h94KclO869VFY4mfjIkPjJVCvTp8',
      authDomain: 'manager-1a66f.firebaseapp.com',
      databaseURL: 'https://manager-1a66f.firebaseio.com',
      projectId: 'manager-1a66f',
      storageBucket: 'manager-1a66f.appspot.com',
      messagingSenderId: '657938251395'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
