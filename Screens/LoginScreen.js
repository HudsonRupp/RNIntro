import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NavButton from '../Components/NavButton';
import HomeScreen from './HomeScreen';
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  submit() {
    console.log(this.state.username + ' ' + this.state.password);
    this.props.changeScreen(
      <HomeScreen changeScreen={screen => this.changeScreen(screen)} />,
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>LOGIN</Text>
        <TextInput
          style={styles.textInput}
          defaultValue="user"
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={usertext => this.setState({username: usertext})}
        />
        <TextInput
          style={styles.textInput}
          defaultValue="pass"
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={passtext => this.setState({password: passtext})}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 100,
    marginTop: 20,
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInput: {
    marginTop: 10,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 300,
  },
});

export default LoginScreen;
