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
    return (
      <View style={styles.main}>
        <Text style={styles.header}> WELCOME </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitLogIn()}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.submitSignUp()}>
          <Text>Sign up</Text>
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
