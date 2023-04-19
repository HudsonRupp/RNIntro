import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {storeValue, readValue} from '../../Helpers';
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../../store/slices/AuthenticationSlice/index';

function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const loggedIn = useSelector(state => state.authentication.authStatus);
  const dispatch = useDispatch();


  function goBack() {
    navigation.navigate('WelcomeScreen')
  }

  async function submit() {
    if (password == 'password') {
      const currentUser = {username: username};
      await storeValue('@user', currentUser);
      dispatch(logIn());
    } else {
      setInvalid(true);
    }
  }


  return(
    <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.header}>LOGIN</Text>
          {invalid ? (
            <Text style={styles.errorText}>Incorrect Username/Password</Text>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={usertext => setUsername(usertext)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={passtext => setPassword(passtext)}
          />
          <TouchableOpacity style={styles.button} onPress={() => submit()}>
            <Text>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
  )

}

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 100,
    marginTop: 40,
    backgroundColor: "#FFFFFF",
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
