import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyB-3vBILDt91IdKHNSGoiuP_-7_UNQ1iZE",
        authDomain: "auth-rn-10ee6.firebaseapp.com",
        databaseURL: "https://auth-rn-10ee6.firebaseio.com",
        storageBucket: "auth-rn-10ee6.appspot.com",
        messagingSenderId: "177679243394"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
