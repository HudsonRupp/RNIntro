import React, {Component, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import secrets from '../../Secrets';
GoogleSignin.configure({
  iosClientId: secrets.googleIosClientId,
});
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NavButton from '../../Components/NavButton';
import HomeScreen from '../Authenticated/HomeScreen';
import AgreementScreen from './AgreementScreen';
import {storeValue, readValue} from '../../Helpers';
import themes from '../../Constants';
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      invalid: false,
    };
  }

  signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Done -- ' + userInfo);
      storeValue('@user', {username: userInfo.user.name});
      this.props.changeScreen(
        <HomeScreen
          user={{username: userInfo.user.name}}
          changeScreen={screen => this.props.changeScreen(screen)}
        />,
      );
    } catch (error) {
      console.log(error.code);
    }
  };

  async submit() {
    //external authentication
    /*
    const resp = await fetch('auth url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    const json = await resp.json()
    */

    //Just for testing purposes
    if (this.state.password == 'password') {
      const currentUser = {username: this.state.username};
      await storeValue('@user', currentUser);
      console.log(await readValue('@user'));
      this.props.changeScreen(
        <AgreementScreen
          changeScreen={screen => this.props.changeScreen(screen)}
        />,
      );
      console.log("setting user")
    } else {
      this.setState({
        invalid: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>LOGIN</Text>
        {this.state.invalid ? (
          <Text style={styles.errorText}>Incorrect Username/Password</Text>
        ) : null}
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={usertext => this.setState({username: usertext})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
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
          onPress={this.signInGoogle}
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
    backgroundColor: themes.light.backgroundAccent,
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
  errorText: {
    color: 'red',
  },
});

export default LoginScreen;
