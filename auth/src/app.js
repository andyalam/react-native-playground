import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyB-3vBILDt91IdKHNSGoiuP_-7_UNQ1iZE",
        authDomain: "auth-rn-10ee6.firebaseapp.com",
        databaseURL: "https://auth-rn-10ee6.firebaseio.com",
        storageBucket: "auth-rn-10ee6.appspot.com",
        messagingSenderId: "177679243394"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent = () => {
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
        return <LoginForm />;
      default:
        return <CardSection><Spinner /></CardSection>;
    }

    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
