import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDthLVzvuhb2sLoLLPkmf5uFV759L99XhU",
      authDomain: "manager-9f5e3.firebaseapp.com",
      databaseURL: "https://manager-9f5e3.firebaseio.com",
      storageBucket: "manager-9f5e3.appspot.com",
      messagingSenderId: "975725731256"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
};

export default App;
