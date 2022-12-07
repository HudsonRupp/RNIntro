import React, {Component, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  iosClientId:
    '964028635680-0drlfn4m4cam51657mobi805hc3n0rh2.apps.googleusercontent.com',
});
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

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Done -- ' + userInfo);
      //this.setState({ userInfo });
    } catch (error) {
      console.log(error.code);
    }
  };

  submit() {
    console.log(this.state.username + ' ' + this.state.password);
    this.props.changeScreen(
      <HomeScreen changeScreen={screen => this.props.changeScreen(screen)} />,
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
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
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
