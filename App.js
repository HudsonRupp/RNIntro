import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HomeScreen from './Screens/Authenticated/HomeScreen';
import LoginScreen from './Screens/Unauthenticated/LoginScreen';
import {storeValue, readValue} from "./Helpers"
class mainApp extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: (
        <LoginScreen changeScreen={screen => this.changeScreen(screen)} />
      ),
    };
    this.isLoggedIn()
  }
  isLoggedIn = async () => {
    val = await readValue("@user")
    //is user logged in 
    console.log(val)
    if (val != null) {
      console.log("user detected as: " + val.username);
      this.changeScreen(<HomeScreen user={val} changeScreen={screen => this.changeScreen(screen)} />)
    } else {
      console.log("user not detected");
    }
  }
  changeScreen(screen) {
    this.setState({
      currentScreen: screen,
    });
  }
  render() {
    return this.state.currentScreen;
  }
}

export default mainApp;
