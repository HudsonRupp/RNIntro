import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HomeScreen from './Screens/Authenticated/HomeScreen';
import LoginScreen from './Screens/Unauthenticated/LoginScreen';
import WelcomeScreen from './Screens/Unauthenticated/WelcomeScreen';
import PrivacyScreen from './Screens/Authenticated/PrivacyScreen';
import {storeValue, readValue} from "./Helpers"
class mainApp extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: (
        <WelcomeScreen changeScreen={screen => this.changeScreen(screen)} />
      ),
    };
    this.isLoggedIn()
  }
  isLoggedIn = async () => {
    val = await readValue("@user")
    //is user logged in 
    if (val != null) {
      this.changeScreen(<HomeScreen user={val} changeScreen={screen => this.changeScreen(screen)} />)
    } else {
    }
  }
  changeScreen(screen) {
    this.setState({
      currentScreen: screen,
    });
  }

  render() {
    return (
      <>
        {this.state.currentScreen}
        <PrivacyScreen/>
      </>
    )
  }
}

export default mainApp;
