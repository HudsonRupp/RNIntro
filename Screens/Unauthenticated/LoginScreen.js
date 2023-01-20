import React, {Component} from 'react';
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
import AgreementScreen from '../Authenticated/AgreementScreen';
import {storeValue, readValue} from '../../Helpers';
import themes from '../../Constants';
import WelcomeScreen from './WelcomeScreen';
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      invalid: false,
    };
  }
  
  goBack() {
    this.props.changeScreen(
      <WelcomeScreen
        changeScreen = {screen => this.props.changeScreen(screen)}
        />
    )
  }

  async submit() {

    if (this.state.password == 'password') {
      const currentUser = {username: this.state.username};
      await storeValue('@user', currentUser);
      this.props.changeScreen(
        <AgreementScreen
          changeScreen={screen => this.props.changeScreen(screen)}
        />,
      );
    } else {
      this.setState({
        invalid: true,
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={() => this.goBack()}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.header}>LOGIN</Text>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 100,
    marginTop: 40,
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
  header: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 10,
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
