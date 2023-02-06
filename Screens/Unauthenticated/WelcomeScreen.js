import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LoginScreen from './LoginScreen';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  submitLogIn() {
    this.props.changeScreen(
      <LoginScreen changeScreen={screen => this.props.changeScreen(screen)} />,
    );
  }

  submitSignUp() {}

  render() {
    const welcomeMessage = "WELCOME"
    const logInMessage = "Log in"
    const signUpMessage = "Sign up"
    return (
      <View style={styles.main}>
        <Text style={styles.header}> {welcomeMessage} </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitLogIn()}>
          <Text>{logInMessage}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitSignUp()}>
          <Text>{signUpMessage}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 50,
  },
  header: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 10,
  },
  button: {
    height: 30,
    width: 100,
    marginTop: 20,
    backgroundColor: themes.light.backgroundAccent,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default WelcomeScreen;
